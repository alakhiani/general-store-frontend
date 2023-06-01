import { Product } from "@/interfaces/product";

const BACKEND_URL = process.env.BACKEND_URL;
const LOG_LEVEL = process.env.LOG_LEVEL ?? 'info';

export const getProducts = async (): Promise<Product[]> => {
    try {
        const backendUrl = `${BACKEND_URL}/product`;
        if (LOG_LEVEL === 'debug') console.log(`Fetching products from ${backendUrl}`);
        const response = await fetch(`${backendUrl}`);
        const json = await response.json();
        if (response.ok) {
            return json.data;
        } else {
            throw new Error('Failed to fetch products');
        }
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while fetching products');
    }
};
