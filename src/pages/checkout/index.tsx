import PageDescription from "@/components/PageDescription";
import ProductItem from "@/components/ProductItem";
import { CartContext } from "@/components/contexts/CartContext";
import { IProduct } from "@/interfaces/product";
import { useContext } from "react";
import Head from 'next/head';
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

const Checkout: React.FC = () => {

    const router = useRouter();
    const cartContext = useContext(CartContext);
    const cartHasItems = cartContext && cartContext.cart.length > 0;

    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <section>
                <PageDescription
                    title="Checkout"
                    description={
                        cartHasItems
                            ? "The following items in your cart are ready for checkout..."
                            : "Your cart is empty, shop the catalog..."
                    }
                />
                {
                    cartHasItems ? (
                        <Button
                            variant="contained"
                            size="large"
                            color="error"
                            onClick={() => cartContext?.clearCart()}
                        >
                            Clear Cart
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            onClick={() => router.push("/catalog")}
                        >
                            Catalog
                        </Button>
                    )
                }
                {
                    cartContext?.cart.map((product: IProduct) => (
                        <ProductItem
                            key={product._id}
                            product={product}
                            handleRemoveFromCart={() => cartContext?.removeFromCart(product._id)}
                            showQuantity={true}
                        />
                    ))
                }
            </section>
        </>
    );
};

export default Checkout;