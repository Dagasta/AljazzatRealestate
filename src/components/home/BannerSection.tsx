import Image from "next/image";

export default function BannerSection() {
    return (
        <section className="py-16 bg-accent border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                        src="/banner.png"
                        alt="Al Jazzat Realestate Digital Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="mt-8 text-center max-w-3xl mx-auto">
                    <p className="text-lg text-primary font-medium">
                        Visit our office in Sharjah or contact us directly on WhatsApp for immediate property consultations.
                    </p>
                </div>
            </div>
        </section>
    );
}
