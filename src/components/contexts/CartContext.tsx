import { IProduct } from '@/interfaces/product';
import React, { createContext, useState, ReactNode } from 'react';

export interface CartContextValue {
    cart: IProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
}

interface CartContextProviderProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<IProduct[]>([]);

    const addToCart = (product: IProduct) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId: string) => {
        setCart((prevCart) => prevCart.filter((product) => product._id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartContextValue: CartContextValue = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };
