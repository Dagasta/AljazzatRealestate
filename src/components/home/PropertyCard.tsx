import Image from "next/image";
import Link from "next/link";

interface PropertyProps {
    id: string;
    title: string;
    price: string;
    location: string;
    type: "For Sale" | "For Rent";
    image: string;
}

export default function PropertyCard({ id, title, price, location, type, image }: PropertyProps) {
    const whatsappNumber = "+971503036115";
    const propertyMessage = encodeURIComponent(`Hello Al Jazzat Realestate, I am interested in ${title} (Ref: ${id}). Can I get more details?`);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${propertyMessage}`;

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="relative h-64 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${type === "For Sale" ? "bg-secondary text-white" : "bg-primary text-white"
                    }`}>
                    {type}
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
                        {title}
                    </h3>
                </div>
                <p className="text-gray-500 text-sm mb-4 flex items-center">
                    <svg className="h-4 w-4 mr-1 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {location}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                    <p className="text-2xl font-bold text-primary">{price}</p>
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        className="flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                        <div className="w-5 h-5 flex-shrink-0">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.752 8.995h-.013c-2.132 0-4.225-.573-6.056-1.658l-.435-.258-4.5 1.18 1.2-4.385-.283-.451c-1.188-1.896-1.815-4.088-1.815-6.336 0-6.619 5.381-12 12-12s12 5.381 12 12c0 6.62-5.381 12-12 12m12.752-12.752c0-7.041-5.711-12.752-12.752-12.752S0 5.711 0 12.752c0 2.251.585 4.445 1.694 6.393L0 24l5.007-1.314c1.868 1.021 3.987 1.558 6.141 1.558 7.041 0 12.752-5.711 12.752-12.752" />
                            </svg>
                        </div>

                        <span className="text-xs">Inquire</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
