"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize, MessageSquare } from "lucide-react";

interface PropertyProps {
    id: string;
    title: string;
    price: string;
    location: string;
    type: "For Sale" | "For Rent";
    image: string;
    images?: string[];
    bedrooms?: number;
    bathrooms?: number;
    area?: number;
}

export default function PropertyCard({ id, title, price, location, type, image, images, bedrooms, bathrooms, area }: PropertyProps) {
    const whatsappMsg = `Hello Al Jazzat Realestate, I am interested in ${title} (Ref: ${id}). Can I get more details?`;
    const whatsappUrl = `https://wa.me/971503036115?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100 relative"
        >
            <Link href={`/properties/${id}`} className="block">
                <div className="relative h-72 w-full overflow-hidden">
                    <Image
                        src={(images && images.length > 0) ? images[0] : image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 flex space-x-2">
                        <span className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg ${type === "For Sale" ? "bg-secondary text-white" : "bg-primary text-white"
                            }`}>
                            {type}
                        </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-8 pb-32">
                    <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                        <MapPin size={14} className="mr-2 text-secondary" />
                        {location}
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-4 line-clamp-1 group-hover:text-secondary transition-colors truncate">
                        {title}
                    </h3>

                    <div className="flex items-center justify-between py-6 border-y border-slate-50 mb-6">
                        <div className="flex items-center space-x-2 text-slate-500">
                            <Bed size={18} className="text-primary" />
                            <span className="text-sm font-bold">{bedrooms || 0} Beds</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-500">
                            <Bath size={18} className="text-primary" />
                            <span className="text-sm font-bold">{bathrooms || 0} Baths</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-500">
                            <Maximize size={18} className="text-primary" />
                            <span className="text-sm font-bold">{area?.toLocaleString() || 0} sqft</span>
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-8">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Price</p>
                        <p className="text-2xl font-black text-primary">{price}</p>
                    </div>
                </div>
            </Link>

            <Link
                href={whatsappUrl}
                target="_blank"
                className="absolute bottom-8 right-8 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all duration-500 shadow-sm z-10"
            >
                <MessageSquare size={24} />
            </Link>
        </motion.div>
    );
}

