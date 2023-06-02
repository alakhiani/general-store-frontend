import PageDescription from "@/components/PageDescription";
import ProductItem from "@/components/ProductItem";
import { CartContext } from "@/components/contexts/CartContext";
import { IProduct } from "@/interfaces/product";
import { useContext, useState } from "react";
import Head from 'next/head';
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { ICartItem } from "@/interfaces/cartItem";
import PlaceOrderModal from "@/components/modals/PlaceOrderModal";
import { IOrder } from "@/interfaces/order";
import { createOrder } from "@/api/orderApi";

const Checkout: React.FC = () => {
    const router = useRouter();
    const [isPlaceOrderModalVisible, setIsPlaceOrderModalVisible] = useState(false);
    const cartContext = useContext(CartContext);
    const cartHasItems = cartContext && cartContext.cart.length > 0;
    const { cartSize, cartValue } = cartContext?.cart.reduce(
        (accumulator: { cartSize: number; cartValue: number }, item: ICartItem) => {
            const { cartSize, cartValue } = accumulator;
            const itemPrice = item.price * item.quantity;
            return {
                cartSize: cartSize + item.quantity,
                cartValue: cartValue + itemPrice,
            };
        },
        { cartSize: 0, cartValue: 0 }
    ) || { cartSize: 0, cartValue: 0 };

    const handleOnSubmit = async (order: IOrder) => {
        // At this point the order does not have the items from the cart, it just
        // contains the customer's information.
        order.orderTotal = cartValue;
        order.items = [];
        cartContext?.cart.forEach((item) => {
            order.items.push({
                productId: item._id,
                quantity: item.quantity,
                price: item.price
            });
        });

        // Place the order by sending it to the server
        const newOrder = await createOrder(order);

        alert(`Your order has been placed! Order ID: ${newOrder._id}`);

        // Clear the cart and redirect to the home page
        setIsPlaceOrderModalVisible(false);
        cartContext?.clearCart();
        router.push("/");
    }

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
                                onClick={() => setIsPlaceOrderModalVisible(true)}
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
                <PlaceOrderModal
                    open={isPlaceOrderModalVisible}
                    onClose={() => setIsPlaceOrderModalVisible(false)}
                    onSubmit={handleOnSubmit}
                />
            </section>
        </>
    );
};

export default Checkout;
