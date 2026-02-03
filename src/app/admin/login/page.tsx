"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Simple auth check as requested
        if (username === "Salim" && password === "Salim123") {
            localStorage.setItem("aljazzat_admin_session", "active");
            router.push("/admin");
        } else {
            setError("Invalid credentials. Access denied.");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-primary flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary opacity-5 blur-[120px] rounded-full -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary opacity-5 blur-[120px] rounded-full -ml-64 -mb-64" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white rounded-[3rem] p-12 shadow-2xl relative z-10"
            >
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20 mx-auto mb-6">
                        <Building2 className="text-white" size={32} />
                    </div>
                    <h1 className="text-3xl font-black text-primary tracking-tight mb-2">Admin <span className="text-secondary italic">Login</span></h1>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Al Jazzat Realestate</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Username</label>
                        <div className="relative">
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                <User size={18} />
                            </span>
                            <input
                                required
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-primary"
                                placeholder="Enter username"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
                        <div className="relative">
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                <Lock size={18} />
                            </span>
                            <input
                                required
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-primary"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs font-bold text-center uppercase tracking-widest animate-shake">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-gold w-full py-5 flex items-center justify-center space-x-3 shadow-xl shadow-secondary/20 disabled:opacity-70 mt-4"
                    >
                        {isLoading ? (
                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <span className="font-black uppercase tracking-widest">Sign In</span>
                        )}
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <button onClick={() => router.push('/')} className="text-slate-400 hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors">
                        ← Back to Website
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
