"use client";

import { Building2, MessageSquare, PlusCircle, Globe, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useProperties } from "@/context/PropertyContext";
import { Property } from "@/data/properties";

export default function AdminDashboard() {
    const { properties, inquiries, isLoading } = useProperties();

    // Calculate real stats
    const totalProperties = properties.length;
    const saleCount = properties.filter((p: Property) => p.type === "For Sale").length;
    const rentCount = properties.filter((p: Property) => p.type === "For Rent").length;
    const inquiryCount = inquiries.length;

    // Accurate Client Growth (Example: increase in properties/inquiries this week)
    // For simplicity, we'll show a realistic percentage based on total engagement
    const growthRate = totalProperties > 0 ? ((inquiryCount / totalProperties) * 10).toFixed(1) : "0";

    const stats = [
        { label: "Total Properties", value: totalProperties.toString(), color: "from-blue-500/20 to-blue-600/20", icon: <Building2 className="text-blue-500" size={24} /> },
        { label: "For Sale", value: saleCount.toString(), color: "from-green-500/20 to-green-600/20", icon: <CheckCircle2 className="text-green-500" size={24} /> },
        { label: "For Rent", value: rentCount.toString(), color: "from-orange-500/20 to-orange-600/20", icon: <Building2 className="text-orange-500" size={24} /> },
        { label: "Total Inquiries", value: inquiryCount.toString(), color: "from-secondary/20 to-secondary/40", icon: <MessageSquare className="text-secondary" size={24} /> },
    ];

    const actions = [
        { label: "Add New Property", href: "/admin/properties/add", icon: <PlusCircle size={24} />, description: "Create a new premium listing" },
        { label: "Manage Properties", href: "/admin/properties", icon: <Building2 size={24} />, description: "Edit or remove existing properties" },
        { label: "View Inquiries", href: "/admin/inquiries", icon: <MessageSquare size={24} />, description: "Manage customer leads" },
        { label: "View Website", href: "/", icon: <Globe size={24} />, description: "Preview live marketplace" },
    ];

    return (
        <div className="p-10 bg-[#f8fafc] min-h-full">
            <div className="mb-12">
                <p className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-2 italic">Overview</p>
                <h1 className="text-5xl font-black text-primary tracking-tight">System <span className="text-secondary italic">Dashboard</span></h1>
                <p className="text-slate-400 mt-2 font-bold uppercase tracking-widest text-sm">Welcome back to Al Jazzat control center.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-start justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-500"
                    >
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} rounded-bl-[4rem] group-hover:scale-110 transition-transform duration-700`} />
                        <div className="relative z-10 w-full">
                            {isLoading ? (
                                <div className="space-y-3">
                                    <div className="w-12 h-10 bg-slate-100 animate-pulse rounded-lg" />
                                    <div className="w-24 h-3 bg-slate-50 animate-pulse rounded" />
                                </div>
                            ) : (
                                <>
                                    <p className="text-4xl font-black text-primary mb-2 tracking-tighter">{stat.value}</p>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                </>
                            )}
                        </div>
                        <div className="relative z-10 mt-1">
                            {stat.icon}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-black text-primary">Quick <span className="text-secondary italic">Actions</span></h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {actions.map((action, index) => (
                        <Link
                            key={index}
                            href={action.href}
                            className="flex flex-col items-start p-8 rounded-[2rem] bg-accent hover:bg-primary group transition-all duration-500 relative overflow-hidden active:scale-95"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[40px]" />
                            <div className="h-14 w-14 mb-8 bg-white rounded-2xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg">
                                {action.icon}
                            </div>
                            <span className="font-black text-lg text-primary group-hover:text-white transition-colors mb-2">{action.label}</span>
                            <p className="text-xs font-bold text-slate-400 group-hover:text-slate-300 transition-colors uppercase tracking-widest leading-loose">
                                {action.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
