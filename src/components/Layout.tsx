import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header title="Capstone General Store">
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

export default Layout;