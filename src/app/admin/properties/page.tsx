"use client";

import { useProperties } from "@/context/PropertyContext";
import { Plus, Search, Edit3, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdminPropertiesPage() {
    const { properties, deleteProperty, isLoading } = useProperties();

    if (isLoading) {
        return (
            <div className="p-10 bg-[#f8fafc] min-h-screen flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="p-10 bg-[#f8fafc] min-h-screen">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                <div>
                    <p className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-2 italic">Management</p>
                    <h1 className="text-5xl font-black text-primary tracking-tight">Manage <span className="text-secondary italic">Properties</span></h1>
                    <p className="text-slate-400 mt-2 font-bold uppercase tracking-widest text-sm">Control your premium listings and inventory.</p>
                </div>
                <Link href="/admin/properties/add" className="btn-gold flex items-center space-x-3 px-8 py-5">
                    <Plus size={20} />
                    <span className="text-lg uppercase tracking-widest font-black">Add New Property</span>
                </Link>
            </div>

            <div className="bg-white rounded-[3.5rem] shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-8 border-b border-slate-50 bg-slate-50/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search properties..."
                            className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium"
                        />
                    </div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                        Showing <span className="text-primary font-black">{properties.length}</span> listings
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Property</th>
                                <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Type</th>
                                <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Price</th>
                                <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map((property) => (
                                <tr key={property.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                                                <Image
                                                    src={(property.images && property.images.length > 0) ? property.images[0] : property.image}
                                                    alt={property.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-black text-primary text-lg group-hover:text-secondary transition-colors">{property.title}</p>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{property.location}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${property.type === "For Sale" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"
                                            }`}>
                                            {property.type}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className="font-black text-primary">{property.price}</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center justify-end space-x-3">
                                            <Link href={`/properties/${property.id}`} target="_blank" className="p-3 bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-sm">
                                                <ExternalLink size={18} />
                                            </Link>
                                            <Link href={`/admin/properties/edit/${property.id}`} className="p-3 bg-slate-100 text-slate-500 rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
                                                <Edit3 size={18} />
                                            </Link>
                                            <button
                                                onClick={() => deleteProperty(property.id)}
                                                className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {properties.length === 0 && (
                    <div className="p-20 text-center">
                        <p className="text-slate-400 font-bold uppercase tracking-widest">No properties found. Start by adding one.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
