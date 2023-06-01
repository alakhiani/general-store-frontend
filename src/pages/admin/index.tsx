import { getProducts, updateProduct, deleteProduct, createProduct } from "@/api/productApi";
import PageDescription from "@/components/PageDescription";
import ProductItem from "@/components/ProductItem";
import AddNewProductModal from "@/components/modals/AddNewProductModal";
import EditProductModal from "@/components/modals/EditProductModal";
import { IProduct } from "@/interfaces/product";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Admin() {
    const [editProduct, setEditProduct] = useState<IProduct | null>(null);
    const [isNewProductModalVisible, setIsNewProductModalVisible] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleOnSubmit = async (product: IProduct) => {
        const copyOfProducts = [...products];
        if (!!product._id) {
            // Edit the product
            const updatedProduct = await updateProduct(product);
            const index = copyOfProducts.findIndex((p) => p._id === updatedProduct._id);
            copyOfProducts[index] = updatedProduct;
        } else {
            // Create the product
            const newProduct = await createProduct(product);
            copyOfProducts.push(newProduct);
        }
        setProducts(copyOfProducts);
        setIsNewProductModalVisible(false);
    };

    const handleDelete = async (product: IProduct) => {
        const isDeleted = await deleteProduct(product._id);
        if (isDeleted) {
            const copyOfProducts = [...products];
            const index = copyOfProducts.findIndex((p) => p._id === product._id);
            copyOfProducts.splice(index, 1);
            setProducts(copyOfProducts);
        }
    };

    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <section>
                <PageDescription
                    title="Admin"
                    description="Here you create new products and edit product details in the catalog..."
                />
                <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px' }}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => setIsNewProductModalVisible(true)}
                    >
                        Add New Product
                    </Button>
                </div>
                {products.map((product) => (
                    <ProductItem
                        key={product._id}
                        product={product}
                        handleDelete={() => handleDelete(product)}
                        handleEdit={() => setEditProduct(product)}
                    />
                ))}
                <AddNewProductModal
                    open={isNewProductModalVisible}
                    onClose={() => setIsNewProductModalVisible(false)}
                    onSubmit={handleOnSubmit}
                />
                <EditProductModal
                    open={!!editProduct}
                    onClose={() => setEditProduct(null)}
                    onSubmit={handleOnSubmit}
                    product={editProduct}
                />
            </section>
        </>
    );
}
