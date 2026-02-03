"use client";

import { useState } from "react";
import { useProperties } from "@/context/PropertyContext";
import { ArrowLeft, Save, Upload, Plus, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { supabase } from "@/lib/supabase";

export default function AddPropertyPage() {
    const router = useRouter();
    const { addProperty } = useProperties();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        location: "",
        type: "For Rent" as "For Sale" | "For Rent",
        category: "Residential",
        description: "",
        image: "",
        images: [] as string[],
        features: ["Central A/C", "24/7 Security"],
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        status: "Active"
    });

    const [newFeature, setNewFeature] = useState("");

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        try {
            setUploadingImage(true);
            const newImageUrls: string[] = [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const fileExt = file.name.split('.').pop();
                const fileName = `${Math.random()}.${fileExt}`;
                const filePath = `property-images/${fileName}`;

                const { data, error } = await supabase.storage
                    .from('properties')
                    .upload(filePath, file);

                if (error) throw error;

                const { data: { publicUrl } } = supabase.storage
                    .from('properties')
                    .getPublicUrl(filePath);

                newImageUrls.push(publicUrl);
            }

            setFormData(prev => ({
                ...prev,
                images: [...prev.images, ...newImageUrls],
                // Use first image as main teaser if not already set
                image: prev.image || newImageUrls[0]
            }));
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload images. Ensure your "properties" bucket is configured correctly.');
        } finally {
            setUploadingImage(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const id = `AZ${Math.floor(Math.random() * 900) + 100}`;
        const property = {
            ...formData,
            id,
        };

        try {
            await addProperty(property);
            router.push("/admin/properties");
        } catch (error) {
            console.error('Submit error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const addFeature = () => {
        if (newFeature.trim()) {
            setFormData({ ...formData, features: [...formData.features, newFeature.trim()] });
            setNewFeature("");
        }
    };

    const removeFeature = (index: number) => {
        setFormData({
            ...formData,
            features: formData.features.filter((_, i) => i !== index)
        });
    };

    return (
        <div className="p-10 bg-[#f8fafc] min-h-screen">
            <div className="mb-12">
                <Link href="/admin/properties" className="inline-flex items-center space-x-2 text-slate-400 font-bold hover:text-primary transition-colors mb-6 group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase tracking-[0.2em] text-[10px]">Back to Properties</span>
                </Link>
                <h1 className="text-5xl font-black text-primary tracking-tight">Add New <span className="text-secondary italic">Property</span></h1>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 space-y-8">
                        <div className="space-y-4">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Property Title</label>
                            <input
                                required
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                type="text"
                                placeholder="e.g. Modern Penthouse with View"
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-primary"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Price</label>
                                <input
                                    required
                                    value={formData.price}
                                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                                    type="text"
                                    placeholder="e.g. 50,000 AED/year"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-primary"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Location</label>
                                <input
                                    required
                                    value={formData.location}
                                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                                    type="text"
                                    placeholder="e.g. Al Majaz, Sharjah"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-primary"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Bedrooms</label>
                                <input
                                    required
                                    value={formData.bedrooms}
                                    onChange={e => setFormData({ ...formData, bedrooms: parseInt(e.target.value) || 0 })}
                                    type="number"
                                    placeholder="2"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-primary"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Bathrooms</label>
                                <input
                                    required
                                    value={formData.bathrooms}
                                    onChange={e => setFormData({ ...formData, bathrooms: parseInt(e.target.value) || 0 })}
                                    type="number"
                                    placeholder="2"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-primary"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Area (sqft)</label>
                                <input
                                    required
                                    value={formData.area}
                                    onChange={e => setFormData({ ...formData, area: parseInt(e.target.value) || 0 })}
                                    type="number"
                                    placeholder="1500"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-primary"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Status</label>
                                <select
                                    required
                                    value={formData.status}
                                    onChange={e => setFormData({ ...formData, status: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-primary appearance-none cursor-pointer"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Off-Plan">Off-Plan</option>
                                    <option value="Sold">Sold</option>
                                    <option value="Featured">Featured</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Description</label>
                            <textarea
                                required
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                rows={6}
                                placeholder="Describe the property details..."
                                className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] p-6 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-slate-600 leading-relaxed"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 space-y-6">
                        <h3 className="text-xl font-black text-primary mb-4">Amenities & Features</h3>
                        <div className="flex flex-wrap gap-3">
                            <AnimatePresence>
                                {formData.features.map((feature, index) => (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        key={index}
                                        className="flex items-center space-x-2 bg-primary/5 text-primary border border-primary/10 px-4 py-2 rounded-full text-xs font-bold"
                                    >
                                        <span>{feature}</span>
                                        <button type="button" onClick={() => removeFeature(index)} className="text-red-400 hover:text-red-500">
                                            <X size={14} />
                                        </button>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                            <input
                                value={newFeature}
                                onChange={e => setNewFeature(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                                type="text"
                                placeholder="Add feature..."
                                className="flex-grow bg-slate-50 border border-slate-100 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold"
                            />
                            <button
                                type="button"
                                onClick={addFeature}
                                className="p-3 rounded-full bg-secondary text-white shadow-lg shadow-secondary/20 hover:scale-110 active:scale-95 transition-all"
                            >
                                <Plus size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-primary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-bl-[4rem] blur-2xl" />
                        <h3 className="text-lg font-black mb-8 relative z-10">Listing Info</h3>
                        <div className="space-y-6 relative z-10">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Listing Type</label>
                                <select
                                    className="w-full bg-white/10 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-sm appearance-none cursor-pointer"
                                    value={formData.type}
                                    onChange={e => setFormData({ ...formData, type: e.target.value as any })}
                                >
                                    <option value="For Rent" className="text-primary">For Rent</option>
                                    <option value="For Sale" className="text-primary">For Sale</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Category</label>
                                <select
                                    className="w-full bg-white/10 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-sm appearance-none cursor-pointer"
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option value="Residential" className="text-primary">Residential</option>
                                    <option value="Commercial" className="text-primary">Commercial</option>
                                    <option value="Industrial" className="text-primary">Industrial</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 space-y-6">
                        <h3 className="text-lg font-black text-primary">Media</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {formData.images.map((img, idx) => (
                                <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden group border border-slate-100">
                                    <img src={img} className="w-full h-full object-cover" alt="Preview" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, image: img })}
                                            className={`p-2 rounded-full ${formData.image === img ? 'bg-secondary text-white' : 'bg-white text-primary'} hover:scale-110 transition-transform`}
                                            title="Set as main image"
                                        >
                                            <Plus size={16} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const newImages = formData.images.filter((_, i) => i !== idx);
                                                setFormData({
                                                    ...formData,
                                                    images: newImages,
                                                    image: formData.image === img ? (newImages[0] || "") : formData.image
                                                });
                                            }}
                                            className="p-2 rounded-full bg-red-500 text-white hover:scale-110 transition-transform"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                    {formData.image === img && (
                                        <div className="absolute top-2 left-2 bg-secondary text-white text-[8px] font-black uppercase px-2 py-1 rounded-full shadow-lg">
                                            Main
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div
                                onClick={() => document.getElementById('image-upload')?.click()}
                                className="aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center space-y-2 group hover:border-secondary transition-colors cursor-pointer"
                            >
                                {uploadingImage ? (
                                    <div className="w-6 h-6 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <Upload size={20} className="text-slate-400 group-hover:text-secondary" />
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Add Photos</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Or Single Image URL</label>
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    placeholder="https://images.unsplash.com/..."
                                    value={formData.image}
                                    onChange={e => setFormData({ ...formData, image: e.target.value })}
                                    className="flex-grow bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-xs"
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (formData.image && !formData.images.includes(formData.image)) {
                                            setFormData({ ...formData, images: [...formData.images, formData.image] });
                                        }
                                    }}
                                    className="p-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-gold w-full flex items-center justify-center space-x-3 py-6 shadow-2xl shadow-secondary/40 disabled:opacity-70"
                    >
                        {isSubmitting ? (
                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <Save size={20} />
                                <span className="text-xl font-black uppercase tracking-widest leading-none">Publish Listing</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
