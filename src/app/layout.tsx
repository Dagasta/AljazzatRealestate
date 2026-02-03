import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Jazzat Realestate | Premium Properties in Sharjah",
  description: "Find the best residential and commercial properties for buy and rent in Sharjah with Al Jazzat Realestate. Trusted real estate office in UAE.",
  keywords: "real estate sharjah, buy property sharjah, rent property sharjah, al jazzat realestate, apartments for rent sharjah",
  openGraph: {
    title: "Al Jazzat Realestate | Premium Properties in Sharjah",
    description: "Your trusted partner for real estate in Sharjah. Discover exclusive listings for sale and rent.",
    url: "https://aljazzat.ae",
    siteName: "Al Jazzat Realestate",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}


