import { IProductItem } from "./productItem";

export interface IOrder {
    _id: string;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    email: string;
    phone: string;
    orderTotal: number;
    items: IProductItem[];
}