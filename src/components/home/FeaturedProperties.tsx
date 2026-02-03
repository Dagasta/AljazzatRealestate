"use client";

import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useProperties } from "@/context/PropertyContext";

export default function FeaturedProperties() {
    const { properties, isLoading } = useProperties();
    const featuredProperties = properties.slice(0, 3);

    if (isLoading) return null; // Or show skeleton
    return (
        <section className="py-32 bg-accent">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-primary mb-6"
                        >
                            Featured <span className="text-secondary italic">Properties</span>
                        </motion.h2>
                        <p className="text-slate-500 max-w-xl text-lg">
                            Handpicked listings that offer the perfect blend of luxury, comfort, and investment potential in Sharjah.
                        </p>
                    </div>
                    <Link href="/properties" className="group flex items-center space-x-3 text-primary font-black uppercase tracking-widest text-sm hover:text-secondary transition-colors">
                        <span>All Properties</span>
                        <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-secondary transition-colors">
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuredProperties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <PropertyCard key={property.id} {...property} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

