"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Property, INITIAL_PROPERTIES } from "@/data/properties";
import { supabase } from "@/lib/supabase";

export interface Inquiry {
    id: string;
    name: string;
    email: string;
    phone: string;
    property_id?: string;
    property_title?: string;
    message: string;
    status: string;
    created_at: string;
}

interface PropertyContextType {
    properties: Property[];
    inquiries: Inquiry[];
    isLoading: boolean;
    addProperty: (property: Property) => Promise<void>;
    deleteProperty: (id: string) => Promise<void>;
    updateProperty: (property: Property) => Promise<void>;
    addInquiry: (inquiry: Partial<Inquiry>) => Promise<void>;
    deleteInquiry: (id: string) => Promise<void>;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export function PropertyProvider({ children }: { children: React.ReactNode }) {
    const [properties, setProperties] = useState<Property[]>([]);
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch data from Supabase on mount
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            await Promise.all([fetchProperties(), fetchInquiries()]);
            setIsLoading(false);
        };
        loadData();
    }, []);

    async function fetchInquiries() {
        try {
            const { data, error } = await supabase
                .from('inquiries')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            if (data) setInquiries(data as Inquiry[]);
        } catch (error) {
            console.error('Error fetching inquiries:', error);
        }
    }

    async function fetchProperties() {
        try {
            setIsLoading(true);
            const { data, error } = await supabase
                .from('properties')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            if (data && data.length > 0) {
                setProperties(data as Property[]);
            } else {
                setProperties([]); // Keep empty for "from scratch" testing
            }
        } catch (error) {
            console.error('Error fetching properties:', error);
            setProperties([]); // No fallback to local data
        } finally {
            setIsLoading(false);
        }
    }

    const addProperty = async (newProp: Property) => {
        try {
            const { error } = await supabase
                .from('properties')
                .insert([newProp]);

            if (error) throw error;
            setProperties([newProp, ...properties]);
        } catch (error) {
            console.error('Error adding property:', error);
            alert('Failed to add property to database. \n\nPROTIP: Make sure you ran the SQL script in "supabase_update_schema.sql" to add the new columns (bedrooms, bathrooms, area, status) to your table.');
        }
    };

    const deleteProperty = async (id: string) => {
        try {
            const { error } = await supabase
                .from('properties')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setProperties(properties.filter(p => p.id !== id));
        } catch (error) {
            console.error('Error deleting property:', error);
        }
    };

    const updateProperty = async (updatedProp: Property) => {
        try {
            const { error } = await supabase
                .from('properties')
                .update(updatedProp)
                .eq('id', updatedProp.id);

            if (error) throw error;
            setProperties(properties.map(p => p.id === updatedProp.id ? updatedProp : p));
        } catch (error) {
            console.error('Error updating property:', error);
        }
    };

    const addInquiry = async (newInquiry: Partial<Inquiry>) => {
        try {
            const { data, error } = await supabase
                .from('inquiries')
                .insert([newInquiry])
                .select();

            if (error) throw error;
            if (data) setInquiries([data[0] as Inquiry, ...inquiries]);
        } catch (error) {
            console.error('Error adding inquiry:', error);
            throw error;
        }
    };

    const deleteInquiry = async (id: string) => {
        try {
            const { error } = await supabase
                .from('inquiries')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setInquiries(inquiries.filter(i => i.id !== id));
        } catch (error) {
            console.error('Error deleting inquiry:', error);
        }
    };

    return (
        <PropertyContext.Provider value={{
            properties,
            inquiries,
            isLoading,
            addProperty,
            deleteProperty,
            updateProperty,
            addInquiry,
            deleteInquiry
        }}>
            {children}
        </PropertyContext.Provider>
    );
}

export function useProperties() {
    const context = useContext(PropertyContext);
    if (context === undefined) {
        throw new Error("useProperties must be used within a PropertyProvider");
    }
    return context;
}
