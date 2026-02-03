"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Al Jazzat Realestate"
              width={180}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/properties" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
              Properties
            </Link>
            <Link href="/buy" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
              Buy
            </Link>
            <Link href="/rent" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
              Rent
            </Link>
            <Link href="/contact" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://wa.me/971503036115" target="_blank" className="btn-secondary text-sm">
              WhatsApp Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-in slide-in-from-top duration-300">
            <Link href="/" className="block text-sm font-medium text-primary px-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/properties" className="block text-sm font-medium text-primary px-2" onClick={() => setIsMenuOpen(false)}>
              Properties
            </Link>
            <Link href="/contact" className="block text-sm font-medium text-primary px-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link
              href="https://wa.me/971503036115"
              target="_blank"
              className="block w-full text-center btn-secondary text-sm mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              WhatsApp Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
