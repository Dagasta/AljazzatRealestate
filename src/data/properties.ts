
export interface Property {
    id: string;
    title: string;
    price: string;
    location: string;
    type: "For Sale" | "For Rent";
    category: string;
    image: string;
    images?: string[];
    description: string;
    features: string[];
    bedrooms?: number;
    bathrooms?: number;
    area?: number;
    status?: string;
}

export const INITIAL_PROPERTIES: Property[] = [];
