"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, Clock, Globe, CheckCircle2, Send } from "lucide-react";
import Link from "next/link";
import { useProperties } from "@/context/PropertyContext";

export default function ContactPage() {
    const { addInquiry } = useProperties();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        type: "Interested in Buying",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await addInquiry({
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                message: `[${formData.type}] ${formData.message}`,
                status: 'New'
            });
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", phone: "", type: "Interested in Buying", message: "" });
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (error: any) {
            console.error("Failed to send inquiry:", error);
            alert(`Failed to send message: ${error.message || "Unknown error"}. Please run the SQL schema in Supabase if you haven't yet.`);
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: <Phone size={24} />, label: "Call Us", details: "+971 50 303 6115", href: "tel:+971503036115" },
        { icon: <MessageSquare size={24} />, label: "WhatsApp", details: "+971 50 303 6115", href: "https://wa.me/971503036115" },
        { icon: <Mail size={24} />, label: "Email Address", details: "info@aljazzat.ae", href: "mailto:info@aljazzat.ae" },
        { icon: <MapPin size={24} />, label: "Our Office", details: "Al Jazzat, Sharjah, UAE", href: "https://maps.google.com" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-primary pt-40 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40%] h-full bg-secondary/5 translate-x-1/2 rounded-full blur-[100px]" />
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6"
                    >
                        Get In <span className="text-secondary italic">Touch</span>
                    </motion.h1>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                        Whether you're looking to buy, sell, or rent, our team is here to provide professional guidance and exceptional service.
                    </p>
                </div>
            </section>

            <section className="py-24 container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Contact Details */}
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <h2 className="text-3xl font-black text-primary mb-6">Contact Information</h2>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                Experience luxury real estate services in the heart of Sharjah. Visit our office or connect with us digitally.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {contactInfo.map((item, index) => (
                                <Link
                                    href={item.href}
                                    key={index}
                                    className="group flex items-start space-x-6 p-8 rounded-3xl bg-accent hover:bg-primary transition-all duration-500 shadow-sm hover:shadow-xl"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-secondary flex items-center justify-center text-primary group-hover:text-white shadow-sm transition-colors duration-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-slate-300 transition-colors">
                                            {item.label}
                                        </p>
                                        <p className="text-xl font-bold text-primary group-hover:text-white transition-colors">
                                            {item.details}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="p-8 rounded-3xl bg-primary text-white space-y-4">
                            <div className="flex items-center space-x-3 text-secondary">
                                <Clock size={20} />
                                <span className="font-bold uppercase tracking-widest text-xs">Working Hours</span>
                            </div>
                            <p className="text-lg font-bold">Monday - Saturday</p>
                            <p className="text-slate-400">09:00 AM - 08:00 PM</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="glass-card p-10 md:p-14 rounded-[3rem] relative overflow-hidden">
                            <h3 className="text-3xl font-black text-primary mb-8">Send a Message</h3>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h4 className="text-2xl font-black text-primary mb-2">Message Sent!</h4>
                                    <p className="text-slate-500">Thank you for reaching out. We'll get back to you shortly.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-8 text-secondary font-bold uppercase tracking-widest text-sm hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Full Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="email@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+971 -- --- ----"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Property Inquiry</label>
                                            <select
                                                value={formData.type}
                                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium appearance-none"
                                            >
                                                <option>Interested in Buying</option>
                                                <option>Interested in Renting</option>
                                                <option>Property Management</option>
                                                <option>Other / General Inquiry</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                                        <textarea
                                            required
                                            rows={5}
                                            placeholder="How can we help you?"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-premium w-full mt-4 text-lg flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                <span>Submit Inquiry</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
