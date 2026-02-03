import Link from "next/link";
import Image from "next/image";

export default function AdminSidebar() {
    return (
        <aside className="w-64 bg-white h-screen sticky top-0 border-r border-gray-100 flex flex-col pt-8">
            <div className="px-6 mb-12">
                <h2 className="text-2xl font-extrabold text-[#2563eb] mb-1">Admin Panel</h2>
                <p className="text-sm text-gray-500">Abdalla Alowais</p>
            </div>

            <nav className="flex-grow space-y-2 px-4">
                <Link href="/admin" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-semibold group transition-all">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-sm">Dashboard</span>
                </Link>
                <Link href="/admin/properties" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-primary transition-all">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-sm">Properties</span>
                </Link>
                <Link href="/admin/inquiries" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-primary transition-all">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">Inquiries</span>
                </Link>
            </nav>

            <div className="p-4 mt-auto border-t border-gray-50">
                <Link href="/" className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-500 hover:text-red-500 transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="text-sm font-medium">Logout</span>
                </Link>
            </div>
        </aside>
    );
}
