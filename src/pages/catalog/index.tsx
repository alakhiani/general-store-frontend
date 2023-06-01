import { getProducts } from '@/api/productApi';
import PageDescription from '@/components/PageDescription';
import ProductItem, { ProductItemProps } from '@/components/ProductItem';
import React from 'react';

interface CatalogProps {
    products?: ProductItemProps['product'][] | null;
}

const Catalog: React.FC<CatalogProps> = ({ products }) => {
    return (
        <section>
            <PageDescription
                title="Catalog"
                description="Our general store has the following product offerings..."
            />
            {products?.map((product) => (
                <ProductItem key={product._id} product={product} />
            ))}
        </section>
    );
};

export async function getServerSideProps() {
    const products = await getProducts();
    return {
        props: {
            products,
        },
    }
}

export default Catalog;
