import AdminSidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-[#f8fafc]">
            <AdminSidebar />
            <main className="flex-grow overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
