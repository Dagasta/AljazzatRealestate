"use client";

import { LayoutDashboard, Building2, MessageSquare, LogOut, Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function AdminSidebar() {
    const pathname = usePathname();

    const menuItems = [
        { label: "Dashboard", href: "/admin", icon: <LayoutDashboard size={20} /> },
        { label: "Properties", href: "/admin/properties", icon: <Building2 size={20} /> },
        { label: "Inquiries", href: "/admin/inquiries", icon: <MessageSquare size={20} /> },
    ];

    return (
        <aside className="w-80 bg-primary h-screen sticky top-0 border-r border-white/10 flex flex-col pt-12 overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
            <div className="absolute -left-20 top-20 w-40 h-40 bg-secondary/10 rounded-full blur-[80px]" />

            <div className="px-8 mb-16 relative z-10">
                <div className="flex items-center space-x-4 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg shadow-secondary/20">
                        <Building2 className="text-white" size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-white tracking-tight">Admin <span className="text-secondary italic">Panel</span></h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Al Jazzat Realestate</p>
                    </div>
                </div>
            </div>

            <nav className="flex-grow space-y-2 px-6 relative z-10">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${isActive
                                ? "bg-white/10 text-white shadow-xl border border-white/10"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <span className={`${isActive ? "text-secondary" : "group-hover:text-secondary"} transition-colors`}>
                                {item.icon}
                            </span>
                            <span className="font-bold text-sm uppercase tracking-widest">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-6 mt-auto border-t border-white/10 relative z-10">
                <Link
                    href="/"
                    className="flex items-center space-x-4 px-6 py-4 rounded-2xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
                >
                    <Globe size={20} className="group-hover:text-secondary transition-colors" />
                    <span className="font-bold text-sm uppercase tracking-widest">View Website</span>
                </Link>
                <button
                    onClick={() => {
                        localStorage.removeItem("aljazzat_admin_session");
                        window.location.href = "/admin/login";
                    }}
                    className="flex items-center space-x-4 w-full px-6 py-4 rounded-2xl text-slate-500 hover:text-red-400 hover:bg-red-400/5 transition-all group mt-2"
                >
                    <LogOut size={20} />
                    <span className="font-bold text-sm uppercase tracking-widest">Logout</span>
                </button>
            </div>
        </aside>
    );
}
