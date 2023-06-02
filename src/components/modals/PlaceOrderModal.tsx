import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import OrderForm from "../forms/OrderForm";
import { IOrder } from "@/interfaces/order";

interface PlaceOrderModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (order: IOrder) => void;
}

export default function PlaceOrderModal({ open, onClose, onSubmit }: PlaceOrderModalProps) {
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
                    Place Order
                </Button>
            </DialogActions>
        </Dialog>
    );
}
