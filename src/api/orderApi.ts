import { IOrder } from "@/interfaces/order";

const BACKEND_URL = process.env.BACKEND_URL;
const LOG_LEVEL = process.env.LOG_LEVEL ?? 'info';
const backendUrl = `${BACKEND_URL}/order`;

export const getOrders = async (): Promise<IOrder[]> => {
    try {
        if (LOG_LEVEL === 'debug') console.log(`Fetching orders from ${backendUrl}`);
        const response = await fetch(`${backendUrl}`);
        const json = await response.json();
        if (response.ok) {
            return json.data;
        } else {
            throw new Error('Failed to fetch orders');
        }
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while fetching orders');
    }
};

export const createOrder = async (order: IOrder): Promise<IOrder> => {
    try {
        if (LOG_LEVEL === 'debug') console.log(`Creating order for ${order.firstName} ${order.lastName} from ${backendUrl}`);
        const response = await fetch(`${backendUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        const json = await response.json();
        if (response.ok) {
            return json.data;
        } else {
            throw new Error('Failed to create order');
        }
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while creating order');
    }
}

export const updateOrder = async (order: IOrder): Promise<IOrder> => {
    try {
        if (LOG_LEVEL === 'debug') console.log(`Updating order for ${order.firstName} ${order.lastName} from ${backendUrl}`);
        const response = await fetch(`${backendUrl}/${order._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        const json = await response.json();
        if (response.ok) {
            return json.data;
        } else {
            throw new Error('Failed to update order');
        }
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while updating order');
    }
}

export const deleteOrder = async (id: string): Promise<boolean> => {
    try {
        if (LOG_LEVEL === 'debug') console.log(`Deleting order ${id} from ${backendUrl}`);
        const response = await fetch(`${backendUrl}/${id}`, { method: 'DELETE' });
        return response.status === 204;
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while deleting order');
    }
}
