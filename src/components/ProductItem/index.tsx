import { IProduct } from "@/interfaces/product";
import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import ItemActions from "./ItemActions";

export interface ProductItemProps {
    product: IProduct,
    handleEdit?: () => void,
    handleDelete?: () => void
}

const ProductItem: React.FC<ProductItemProps> = ({ product, handleEdit, handleDelete }) => {
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
                <Stack spacing={4}>
                    <h3>{product.name}</h3>
                    <div>{product.description}</div>
                    <ItemActions
                        id={product._id}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default ProductItem;
