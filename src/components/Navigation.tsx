import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

interface NavigationProps {
    children: ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
    return (
        <>
            <Header title="Cart">
                <Link href="/">Home</Link>
                <Link href="/catalog">Catalog</Link>
                <Link href="/admin">Admin</Link>
            </Header>
            <Container fixed>
                <main>{children}</main>
            </Container>
            <Footer />
        </>
    );
};

export default Navigation;