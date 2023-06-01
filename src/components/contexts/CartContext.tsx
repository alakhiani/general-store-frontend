import { IProduct } from '@/interfaces/product';
import React, { createContext, useState, ReactNode } from 'react';

export interface CartItem extends IProduct {
    quantity: number;
}

export interface CartContextValue {
    cart: CartItem[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
}

interface CartContextProviderProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: IProduct) => {
        const existingCartItem = cart.find((item) => item._id === product._id);
        if (existingCartItem) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId: string) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
            ).filter((item) => item.quantity > 0)
        );
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

    return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };
