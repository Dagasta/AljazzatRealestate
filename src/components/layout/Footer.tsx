import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/logo.png"
                                alt="Al Jazzat Realestate"
                                width={200}
                                height={60}
                                className="h-14 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Leading real estate office in Sharjah, providing premium property solutions for buy and rent.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-secondary">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/properties" className="text-sm text-gray-400 hover:text-white transition-colors">Properties</Link>
                            </li>
                            <li>
                                <Link href="/buy" className="text-sm text-gray-400 hover:text-white transition-colors">Buy</Link>
                            </li>
                            <li>
                                <Link href="/rent" className="text-sm text-gray-400 hover:text-white transition-colors">Rent</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-secondary">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <span className="text-secondary mt-1">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <span className="text-sm text-gray-400">Sharjah, United Arab Emirates</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-secondary">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <span className="text-sm text-gray-400">+971 6 5610070</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-secondary">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <span className="text-sm text-gray-400">aljazzatreal@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-secondary">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                                <span className="sr-only">Facebook</span>
                                {/* Facebook icon */}
                            </Link>
                            <Link href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                                <span className="sr-only">Instagram</span>
                                {/* Instagram icon */}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Al Jazzat Realestate. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
