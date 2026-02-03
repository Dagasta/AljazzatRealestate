import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banner.png"
                    alt="Al Jazzat Realestate Banner"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-white text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                    Your Trusted Partner in <br />
                    <span className="text-secondary text-5xl md:text-7xl">Sharjah Real Estate</span>
                </h1>
                <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
                    Discover premium residential and commercial properties tailored to your needs. From luxury apartments to professional office spaces.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link href="/properties" className="btn-secondary px-10 py-4 text-lg">
                        View All Properties
                    </Link>
                    <Link href="/contact" className="btn-primary border border-white/20 px-10 py-4 text-lg hover:bg-white hover:text-primary">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
