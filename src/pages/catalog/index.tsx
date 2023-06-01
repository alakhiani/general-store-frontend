import { getProducts } from '@/api/productApi';
import PageDescription from '@/components/PageDescription';
import ProductItem, { ProductItemProps } from '@/components/ProductItem';
import { CartContext, CartContextValue } from '@/components/contexts/CartContext';
import { IProduct } from '@/interfaces/product';
import React, { useContext } from 'react';
import Head from 'next/head';

interface CatalogProps {
    products?: ProductItemProps['product'][] | null;
}

const Catalog: React.FC<CatalogProps> = ({ products }) => {

    const cartContext = useContext(CartContext);

    const handleAddToCart = (product: IProduct) => {
        cartContext?.addToCart(product);
    };

    return (
        <>
            <Head>
                <title>Catalog</title>
            </Head>
            <section>
                <PageDescription
                    title="Catalog"
                    description="Our general store has the following product offerings..."
                />
                {products?.map((product) => (
                    <ProductItem
                        key={product._id}
                        product={product}
                        handleAddToCart={() => handleAddToCart(product)}
                    />
                ))}
            </section>
        </>
    );
};

export async function getServerSideProps() {
    const products = await getProducts();
    return {
        props: {
            products,
        },
    };
}

export default Catalog;
