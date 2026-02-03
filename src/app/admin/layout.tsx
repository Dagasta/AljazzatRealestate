"use client";

import AdminSidebar from "@/components/admin/Sidebar";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const session = localStorage.getItem("aljazzat_admin_session");
        const isLoginPage = pathname === "/admin/login";

        if (!session && !isLoginPage) {
            router.push("/admin/login");
        } else if (session && isLoginPage) {
            router.push("/admin");
        } else {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, [pathname, router]);

    if (isLoading) {
        return <div className="min-h-screen bg-primary flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin" />
        </div>;
    }

    const isLoginPage = pathname === "/admin/login";

    if (isLoginPage) {
        return <>{children}</>;
    }

    return (
        <div className="flex min-h-screen bg-[#f8fafc]">
            <AdminSidebar />
            <main className="flex-grow overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
