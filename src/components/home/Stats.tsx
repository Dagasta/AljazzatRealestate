"use client";

import { motion } from "framer-motion";
import { Home, Users, Award, TrendingUp } from "lucide-react";

const stats = [
    { label: "Properties Listed", value: "500+", icon: <Home size={28} /> },
    { label: "Happy Clients", value: "1,200+", icon: <Users size={28} /> },
    { label: "Years Excellence", value: "15+", icon: <Award size={28} /> },
    { label: "Expert Agents", value: "25+", icon: <TrendingUp size={28} /> },
];

export default function Stats() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-2xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 border border-slate-100 group-hover:border-transparent">
                                {stat.icon}
                            </div>
                            <p className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tight group-hover:text-secondary transition-colors duration-500">{stat.value}</p>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs md:text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

