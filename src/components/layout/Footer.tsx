"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
            {/* Decorative Gradient */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="inline-block">
                            <div className="relative h-20 w-64 md:w-72">
                                <Image
                                    src="/logo.png"
                                    alt="Al Jazzat Realestate"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Your premier partner for luxury real estate in Sharjah. We redefine living standards with exclusive properties and expert guidance.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: <Facebook size={20} />, href: "#" },
                                { icon: <Instagram size={20} />, href: "#" },
                                { icon: <Twitter size={20} />, href: "#" },
                                { icon: <Linkedin size={20} />, href: "#" },
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.href}
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-500"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:pl-8">
                        <h3 className="text-xl font-black mb-8 flex items-center space-x-3">
                            <div className="w-8 h-[2px] bg-secondary" />
                            <span>Quick Links</span>
                        </h3>
                        <ul className="space-y-4">
                            {["Home", "Properties", "Buy", "Rent", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="text-slate-400 hover:text-white flex items-center group transition-colors"
                                    >
                                        <ArrowRight size={14} className="mr-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-secondary" />
                                        <span className="font-bold tracking-wide uppercase text-sm">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-xl font-black mb-8 flex items-center space-x-3">
                            <div className="w-8 h-[2px] bg-secondary" />
                            <span>Contact Us</span>
                        </h3>
                        <ul className="space-y-6">
                            {[
                                { icon: <Phone size={18} />, text: "+971 50 303 6115", href: "tel:+971503036115" },
                                { icon: <Mail size={18} />, text: "info@aljazzat.ae", href: "mailto:info@aljazzat.ae" },
                                { icon: <MapPin size={18} />, text: "Al Jazzat, Sharjah, UAE", href: "#" },
                            ].map((contact, i) => (
                                <li key={i}>
                                    <Link href={contact.href} className="flex items-start space-x-4 text-slate-400 hover:text-white transition-colors group">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                                            {contact.icon}
                                        </div>
                                        <span className="font-bold pt-2">{contact.text}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / Office */}
                    <div>
                        <h3 className="text-xl font-black mb-8 flex items-center space-x-3">
                            <div className="w-8 h-[2px] bg-secondary" />
                            <span>Our Office</span>
                        </h3>
                        <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 space-y-4">
                            <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Digital Excellence</p>
                            <p className="text-2xl font-black text-white italic">Trusted by thousands in Sharjah.</p>
                            <Link href="/contact" className="btn-gold w-full text-center py-4 rounded-2xl block text-sm">
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em]">
                        &copy; {currentYear} Al Jazzat Realestate. All Rights Reserved.
                    </p>
                    <div className="flex space-x-8 text-slate-500 font-bold text-xs uppercase tracking-[0.2em]">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

