import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import OrderForm from "../forms/OrderForm";
import { IOrder } from "@/interfaces/order";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ICartItem } from "@/interfaces/cartItem";

interface PlaceOrderModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (order: IOrder) => void;
}

export default function PlaceOrderModal({ open, onClose, onSubmit }: PlaceOrderModalProps) {

    const cartContext = useContext(CartContext);
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

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Please enter your details to complete the order...</DialogTitle>
            <DialogContent>
                <OrderForm onSubmit={onSubmit} />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="error"
                    type="reset"
                    form="order-form"
                >
                    Clear Form
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    form="order-form"
                    onClick={onClose}
                >
                    Order {cartSize} items for a total of ${cartValue.toFixed(2)}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
