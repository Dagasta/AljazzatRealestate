"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/banner.png"
                        alt="Al Jazzat Realestate Banner"
                        fill
                        className="object-cover mix-blend-overlay grayscale"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/95 to-primary" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 text-secondary mb-6"
                    >
                        <Star size={20} fill="currentColor" />
                        <span className="text-sm font-bold uppercase tracking-[0.3em] font-sans">Premium Real Estate Services</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1]"
                    >
                        Redefining Luxury <br />
                        <span className="text-gradient-gold">Living in Sharjah</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed"
                    >
                        Experience unparalleled real estate expertise with Al Jazzat. We connect you with exclusive residential and commercial properties that define your lifestyle.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8"
                    >
                        <Link href="/properties" className="btn-gold group px-12 py-5 text-lg">
                            <span className="flex items-center space-x-2">
                                <span>Explore Properties</span>
                                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={24} />
                            </span>
                        </Link>
                        <Link href="/contact" className="text-white font-bold hover:text-secondary transition-colors flex items-center space-x-2 group">
                            <span>Our Services</span>
                            <div className="h-[2px] w-8 bg-secondary transition-all duration-300 group-hover:w-12" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-secondary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}

