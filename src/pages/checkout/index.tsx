import PageDescription from "@/components/PageDescription";
import ProductItem from "@/components/ProductItem";
import { CartContext } from "@/components/contexts/CartContext";
import { IProduct } from "@/interfaces/product";
import { useContext } from "react";
import Head from 'next/head';

const Checkout: React.FC = () => {

    const cartContext = useContext(CartContext);

    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <section>
                <PageDescription
                    title="Checkout"
                    description="The following items in your cart are ready for checkout..."
                />
                {
                    cartContext?.cart.map((product: IProduct) => (
                        <ProductItem
                            key={product._id}
                            product={product}
                            handleRemoveFromCart={() => cartContext?.removeFromCart(product._id)}
                        />
                    ))
                }
            </section>
        </>
    );
};

export default Checkout;