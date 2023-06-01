import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import ItemActions from "./ItemActions";
import { IProduct } from "@/interfaces/product";
import { useContext } from "react";
import { CartContext, CartItem } from "@/components/contexts/CartContext";

export interface ProductItemProps {
    product: IProduct;
    showQuantity?: boolean;
    handleEdit?: () => void;
    handleDelete?: () => void;
    handleAddToCart?: () => void;
    handleRemoveFromCart?: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
    product,
    showQuantity = false,
    handleEdit,
    handleDelete,
    handleAddToCart,
    handleRemoveFromCart
}) => {
    const cartContext = useContext(CartContext);

    return (
        <Grid container spacing={6} sx={{ pt: "25px", pb: "25px" }}>
            <Grid item md={6}>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300}
                    height={180}
                    priority
                />
            </Grid>
            <Grid item md={6}>
                <Stack spacing={1}>
                    <h3>
                        {product.name} ${product.price.toFixed(2)}
                    </h3>
                    <div>{product.description}</div>
                    {
                        // The ProductItem component is shared across Catalog, 
                        // Admin, and Checkout pages, and for the Checkout
                        // page we pass a CartItem instead of an IProduct, so here
                        // we check if the product is of type CartItem, and if it has
                        // the quantity property, before attempting to display quantity
                        showQuantity &&
                        typeof product === "object" &&
                        "quantity" in product &&
                        cartContext && (
                            <div>Quantity: {(product as CartItem).quantity}</div>
                        )}
                    <ItemActions
                        id={product._id}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                        onAddToCart={handleAddToCart}
                        onRemoveFromCart={handleRemoveFromCart}
                    />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default ProductItem;
