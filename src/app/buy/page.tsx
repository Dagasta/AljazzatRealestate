"use client";

import { motion } from "framer-motion";
import PropertyCard from "@/components/home/PropertyCard";

import { useProperties } from "@/context/PropertyContext";

export default function BuyPage() {
    const { properties } = useProperties();
    const buyProperties = properties.filter(p => p.type === "For Sale");

    return (
        <div className="min-h-screen bg-accent pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-primary mb-4"
                    >
                        Properties <span className="text-secondary italic">For Sale</span>
                    </motion.h1>
                    <p className="text-slate-500 max-w-2xl text-lg">
                        Invest in Sharjah's finest residential and commercial real estate. Premium properties selected for value and luxury.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {buyProperties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <PropertyCard {...property} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
