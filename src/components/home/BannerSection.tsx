"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BannerSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <Link href="/contact" className="block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[300px] md:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer"
                    >
                        <Image
                            src="/banner.png"
                            alt="Al Jazzat Realestate Office"
                            fill
                            className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
                        <div className="absolute bottom-12 left-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl"
                            >
                                <p className="text-primary font-black uppercase tracking-widest text-xs mb-1">Visit our center</p>
                                <p className="text-2xl font-black text-primary">Experience Al Jazzat Premium</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
}

