import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import ProductForm from "../forms/ProductForm";
import { IProduct } from "@/interfaces/product";

interface AddNewProductModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (product: IProduct) => void;
}

export default function AddNewProductModal({ open, onClose, onSubmit }: AddNewProductModalProps) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Adding a new product...</DialogTitle>
            <DialogContent>
                <ProductForm onSubmit={onSubmit} />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="error"
                    type="reset"
                    form="product-form"
                >
                    Clear Form
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    form="product-form"
                    onClick={onClose}
                >
                    Add Product
                </Button>
            </DialogActions>
        </Dialog>
    );
}
