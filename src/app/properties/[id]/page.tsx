"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize, MessageSquare, CheckCircle, ArrowLeft, Share2, Heart } from "lucide-react";
import { useProperties } from "@/context/PropertyContext";

export default function PropertyDetailPage() {
    const { id } = useParams();
    const { properties } = useProperties();
    const property = properties.find(p => p.id === id) || properties[0];
    const [selectedImage, setSelectedImage] = useState(property.image);

    const whatsappMsg = `Hello Al Jazzat Realestate, I am interested in ${property.title} (Ref: ${property.id}). Can I get more details?`;
    const whatsappUrl = `https://wa.me/971503036115?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <div className="min-h-screen bg-accent pb-20">
            {/* Visual Header */}
            <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-primary">
                <Image
                    src={selectedImage}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Gallery Thumbnails */}
                {property.images && property.images.length > 1 && (
                    <div className="absolute bottom-32 left-0 w-full z-20">
                        <div className="container mx-auto px-4 md:px-8">
                            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                                {property.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(img)}
                                        className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 ${selectedImage === img ? 'border-secondary scale-110 shadow-xl' : 'border-white/20'
                                            }`}
                                    >
                                        <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-32 left-0 w-full">
                    <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                        <Link href="/properties" className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-6 py-3 rounded-full font-bold">
                            <ArrowLeft size={20} />
                            <span>Back to Properties</span>
                        </Link>
                        <Link
                            href={whatsappUrl}
                            target="_blank"
                            className="btn-gold flex items-center space-x-2 shadow-lg"
                        >
                            <MessageSquare size={18} />
                            <span>WhatsApp Us</span>
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-12 left-0 w-full">
                    <div className="container mx-auto px-4 md:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                        >
                            <div>
                                <span className="px-5 py-2 rounded-full bg-secondary text-white text-xs font-black uppercase tracking-widest mb-6 inline-block">
                                    {property.type}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                                    {property.title}
                                </h1>
                                <div className="flex items-center text-white/80 text-lg">
                                    <MapPin size={24} className="mr-2 text-secondary" />
                                    {property.location}
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 text-white min-w-[300px]">
                                <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">Asking Price</p>
                                <p className="text-4xl font-black">{property.price}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        <div className="glass-card p-10 rounded-[3rem]">
                            <h2 className="text-3xl font-black text-primary mb-8 border-b border-slate-50 pb-6">Property Overview</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {[
                                    { icon: <Bed />, label: "Bedrooms", value: `${property.bedrooms || 0} Rooms` },
                                    { icon: <Bath />, label: "Bathrooms", value: `${property.bathrooms || 0} Baths` },
                                    { icon: <Maximize />, label: "Space", value: `${property.area?.toLocaleString() || 0} sqft` },
                                    { icon: <CheckCircle />, label: "Status", value: property.status || "Active" },
                                ].map((spec, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="text-secondary">{spec.icon}</div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{spec.label}</p>
                                        <p className="text-lg font-black text-primary">{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-primary">Description</h2>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                {property.description}
                            </p>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-primary">Amenities & Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {property.features.map((feature, i) => (
                                    <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-50">
                                        <CheckCircle size={20} className="text-secondary" />
                                        <span className="font-bold text-primary">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Inquiry */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            <div className="glass-card p-10 rounded-[3.5rem] bg-primary text-white border-none shadow-2xl">
                                <h3 className="text-2xl font-black mb-8">Direct Inquiry</h3>
                                <div className="space-y-6">
                                    <Link href={whatsappUrl} target="_blank" className="btn-gold w-full flex items-center justify-center space-x-3 py-5">
                                        <MessageSquare size={24} />
                                        <span className="text-lg">WhatsApp Us</span>
                                    </Link>
                                    <Link href={whatsappUrl} target="_blank" className="btn-premium bg-white/10 hover:bg-white/20 w-full flex items-center justify-center space-x-3 py-5 border border-white/10">
                                        <MessageSquare size={24} />
                                        <span>Quick Inquiry</span>
                                    </Link>
                                </div>
                                <div className="mt-10 pt-8 border-t border-white/10 flex items-center space-x-4">
                                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center font-black text-2xl">AJ</div>
                                    <div>
                                        <p className="font-black text-lg">Al Jazzat Agent</p>
                                        <p className="text-secondary text-sm font-bold uppercase tracking-widest">Property Advisor</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center px-10">
                                <button className="flex items-center space-x-2 text-slate-400 font-bold hover:text-primary transition-colors">
                                    <Share2 size={20} />
                                    <span>Share Property</span>
                                </button>
                                <button className="flex items-center space-x-2 text-slate-400 font-bold hover:text-red-500 transition-colors">
                                    <Heart size={20} />
                                    <span>Save to List</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
