import { IProduct } from "@/interfaces/product";

const BACKEND_URL = process.env.BACKEND_URL;
const LOG_LEVEL = process.env.LOG_LEVEL ?? 'info';
const backendUrl = `${BACKEND_URL}/product`;
export const getProducts = async (): Promise<IProduct[]> => {
    try {
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

export const createProduct = async (product: IProduct): Promise<IProduct> => {
    try {
        if (LOG_LEVEL === 'debug') console.log(`Creating product ${product.name} from ${backendUrl}`);
        const response = await fetch(`${backendUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const json = await response.json();
        if (response.ok) {
            return json.data;
        } else {
            throw new Error('Failed to create product');
        }
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while creating product');
    }
}

export const updateProduct = async (product: IProduct): Promise<IProduct> => {
    try {
        if (LOG_LEVEL === 'debug') console.log(`Updating product ${product.name} from ${backendUrl}`);
        const response = await fetch(`${backendUrl}/${product._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const json = await response.json();
        if (response.ok) {
            return json.data;
        } else {
            throw new Error('Failed to update product');
        }
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while updating product');
    }
}

export const deleteProduct = async (id: string): Promise<boolean> => {
    try {
        if (LOG_LEVEL === 'debug') console.log(`Deleting product ${id} from ${backendUrl}`);
        const response = await fetch(`${backendUrl}/${id}`, { method: 'DELETE' });
        return response.status === 204;
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while deleting product');
    }
}
