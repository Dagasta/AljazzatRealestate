"use client";

import { useProperties } from "@/context/PropertyContext";
import { formatDistanceToNow } from "date-fns";
import { MessageSquare, Trash2, Mail, Phone, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AdminInquiriesPage() {
    const { inquiries, deleteInquiry, isLoading } = useProperties();

    return (
        <div className="p-10 bg-[#f8fafc] min-h-screen">
            <div className="mb-12">
                <p className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-2 italic">Engagement</p>
                <h1 className="text-5xl font-black text-primary tracking-tight">Customer <span className="text-secondary italic">Inquiries</span></h1>
                <p className="text-slate-400 mt-2 font-bold uppercase tracking-widest text-sm">Respond to leads and manage communications.</p>
            </div>

            <div className="space-y-6">
                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
                    </div>
                ) : inquiries.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
                        <p className="text-slate-400 font-bold uppercase tracking-widest">No inquiries yet.</p>
                    </div>
                ) : (
                    inquiries.map((inquiry) => (
                        <div key={inquiry.id} className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                                        <MessageSquare size={28} />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-3">
                                            <h3 className="text-2xl font-black text-primary">{inquiry.name}</h3>
                                            <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                                                {formatDistanceToNow(new Date(inquiry.created_at), { addSuffix: true })}
                                            </span>
                                        </div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Inquired about: <span className="text-secondary">{inquiry.property_title || "General Inquiry"}</span></p>
                                        <div className="flex flex-wrap gap-6 mt-4">
                                            <div className="flex items-center space-x-2 text-slate-500 text-sm font-bold">
                                                <Mail size={16} className="text-secondary" />
                                                <span>{inquiry.email}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-500 text-sm font-bold">
                                                <Phone size={16} className="text-secondary" />
                                                <span>{inquiry.phone}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-6 lg:max-w-md w-full border border-slate-100 italic transition-colors group-hover:bg-white group-hover:border-secondary/20">
                                    <p className="text-slate-600 text-sm leading-relaxed">"{inquiry.message}"</p>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Link href={`https://wa.me/${inquiry.phone.replace(/\+/g, '')}`} target="_blank" className="btn-gold p-4">
                                        <ExternalLink size={20} />
                                    </Link>
                                    <button
                                        onClick={() => deleteInquiry(inquiry.id)}
                                        className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
