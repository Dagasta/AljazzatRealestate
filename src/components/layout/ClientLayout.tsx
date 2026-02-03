"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith("/admin");

    return (
        <>
            {!isAdmin && <Header />}
            <main className="flex-grow">
                {children}
            </main>
            {!isAdmin && <Footer />}
            {!isAdmin && <FloatingWhatsApp />}
        </>
    );
}
