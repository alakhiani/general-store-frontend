import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import ProductForm from "../forms/ProductForm";
import { IProduct } from "@/interfaces/product";

interface EditProductModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (product: IProduct) => void;
    product: IProduct | null;
}

export default function EditProductModal({ open, onClose, onSubmit, product }: EditProductModalProps) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Editing product...</DialogTitle>
            <DialogContent>
                <ProductForm editValues={product} onSubmit={onSubmit} />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="error"
                    type="reset"
                    form="product-form"
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    form="product-form"
                    onClick={onClose}
                >
                    Update Product
                </Button>
            </DialogActions>
        </Dialog>
    );
}
