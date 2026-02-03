"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Pages that need a light header (dark text) immediately
  const isLightPage = pathname === "/properties" || pathname === "/buy" || pathname === "/rent" || pathname?.startsWith("/properties/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Buy", href: "/buy" },
    { name: "Rent", href: "/rent" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled || isLightPage ? "glass-nav py-2 shadow-2xl" : "bg-transparent py-6"
      }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-105">
            <div className="relative h-14 w-60 md:h-16 md:w-72">
              <Image
                src="/logo.png"
                alt="Al Jazzat Realestate"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors relative group ${isScrolled || isLightPage ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full`} />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="https://wa.me/971503036115"
              target="_blank"
              className="btn-gold flex items-center space-x-2 shadow-lg"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled || isLightPage ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed inset-x-0 top-[headerHeight] glass-card mt-4 mx-4 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-xl font-bold text-primary hover:text-secondary transition-colors px-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="https://wa.me/971503036115"
                  target="_blank"
                  className="btn-gold w-full text-center flex items-center justify-center space-x-2 mt-8"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageSquare size={20} />
                  <span>Connect on WhatsApp</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}


