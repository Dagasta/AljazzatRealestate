export default function Stats() {
    const stats = [
        { label: "Properties Listed", value: "500+" },
        { label: "Happy Clients", value: "1000+" },
        { label: "Successful Deals", value: "300+" },
        { label: "Years Experience", value: "15+" },
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 rounded-2xl bg-accent border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                            <p className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
