"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "@/components/home/PropertyCard";
import { Search, Filter, Home, Building, LayoutGrid } from "lucide-react";
import { useProperties } from "@/context/PropertyContext";

export default function PropertiesPage() {
    const { properties } = useProperties();
    const [filter, setFilter] = useState<"All" | "For Sale" | "For Rent">("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProperties = properties.filter(p => {
        const matchesFilter = filter === "All" || p.type === filter;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-accent pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header Section */}
                <div className="mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-primary mb-4"
                    >
                        Exclusive <span className="text-secondary italic">Listings</span>
                    </motion.h1>
                    <p className="text-slate-500 max-w-2xl text-lg">
                        Browse through our curated selection of top-tier properties in Sharjah. Find your next home or investment opportunity today.
                    </p>
                </div>

                {/* Search & Filter Bar */}
                <div className="glass-card p-6 rounded-3xl mb-12 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="relative w-full lg:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by area or property name..."
                            className="w-full bg-white border border-slate-100 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex p-1 bg-slate-100 rounded-full w-full lg:w-auto overflow-hidden">
                        {["All", "For Sale", "For Rent"].map((option) => (
                            <button
                                key={option}
                                onClick={() => setFilter(option as any)}
                                className={`flex-1 lg:flex-none px-8 py-3 rounded-full text-sm font-bold transition-all ${filter === option ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-primary"
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((property, index) => (
                            <motion.div
                                key={property.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                layout
                            >
                                <PropertyCard {...property} />
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Search size={32} className="text-slate-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">No properties found</h3>
                            <p className="text-slate-500">Try adjusting your filters or search terms.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
