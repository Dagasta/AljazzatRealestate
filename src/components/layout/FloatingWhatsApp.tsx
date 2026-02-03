export default function FloatingWhatsApp() {
    const number = "+971503036115";
    const message = encodeURIComponent("Hi Al Jazzat Realestate, I would like to inquire about your services.");
    const url = `https://wa.me/${number.replace("+", "")}?text=${message}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
        >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.752 8.995h-.013c-2.132 0-4.225-.573-6.056-1.658l-.435-.258-4.5 1.18 1.2-4.385-.283-.451c-1.188-1.896-1.815-4.088-1.815-6.336 0-6.619 5.381-12 12-12s12 5.381 12 12c0 6.62-5.381 12-12 12m12.752-12.752c0-7.041-5.711-12.752-12.752-12.752S0 5.711 0 12.752c0 2.251.585 4.445 1.694 6.393L0 24l5.007-1.314c1.868 1.021 3.987 1.558 6.141 1.558 7.041 0 12.752-5.711 12.752-12.752" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
                Online
            </span>
        </a>
    );
}
