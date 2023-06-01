import PageDescription from "@/components/PageDescription";
import ProductItem from "@/components/ProductItem";
import { CartContext, CartItem } from "@/components/contexts/CartContext";
import { IProduct } from "@/interfaces/product";
import { useContext } from "react";
import Head from 'next/head';
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const Checkout: React.FC = () => {
    const router = useRouter();
    const cartContext = useContext(CartContext);
    const cartHasItems = cartContext && cartContext.cart.length > 0;
    const { cart } = cartContext || { cart: [] };
    const { cartSize, cartValue } = cart.reduce(
        (accumulator: { cartSize: number; cartValue: number }, item: CartItem) => {
            const { cartSize, cartValue } = accumulator;
            const itemPrice = item.price * item.quantity;
            return {
                cartSize: cartSize + item.quantity,
                cartValue: cartValue + itemPrice,
            };
        },
        { cartSize: 0, cartValue: 0 }
    );

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
                {cartHasItems ? (
                    <Grid container spacing={6} sx={{ pt: "10px", pb: "10px" }}>
                        <Grid item md={3}>
                            <Button
                                variant="contained"
                                size="large"
                                color="error"
                                onClick={() => cartContext?.clearCart()}
                            >
                                Clear Cart ({cartSize})
                            </Button>
                        </Grid>
                        <Grid item md={4}>
                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                onClick={() => router.push("/checkout")} // TODO: launch form
                            >
                                Complete Checkout (${cartValue.toFixed(2)})
                            </Button>
                        </Grid>
                    </Grid>
                ) : (
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        onClick={() => router.push("/catalog")}
                    >
                        Catalog
                    </Button>
                )}
                {cartContext?.cart.map((product: IProduct) => (
                    <ProductItem
                        key={product._id}
                        product={product}
                        handleRemoveFromCart={() => cartContext?.removeFromCart(product._id)}
                        showQuantity={true}
                    />
                ))}
            </section>
        </>
    );
};

export default Checkout;
