import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
    const properties = [
        {
            id: "AZ001",
            title: "Modern 2BHK Apartment",
            price: "45,000 AED/year",
            location: "Al Nahda, Sharjah",
            type: "For Rent" as const,
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "AZ002",
            title: "Luxury Villa with Pool",
            price: "3,200,000 AED",
            location: "Muwaileh, Sharjah",
            type: "For Sale" as const,
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "AZ003",
            title: "Commercial Office Space",
            price: "120,000 AED/year",
            location: "Al Majaz, Sharjah",
            type: "For Rent" as const,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
        },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 italic">Featured Properties</h2>
                        <p className="text-gray-500 max-w-xl">
                            Explore our handpicked selection of premium properties in the most sought-after locations in Sharjah.
                        </p>
                    </div>
                    <button className="mt-8 md:mt-0 text-secondary font-bold hover:underline">
                        View All Properties &rarr;
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} {...property} />
                    ))}
                </div>
            </div>
        </section>
    );
}
