import { Button, Avatar, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/components/contexts/CartContext';
import { useRouter } from 'next/router';

interface HeaderProps {
    title: string;
    children: React.ReactNode;
}

export default function Header({ title, children }: HeaderProps): JSX.Element {

    const router = useRouter();
    const cartContext = useContext(CartContext);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        if (cartContext) {
            setCartItemCount(cartContext.cart.length);
        }
    }, [cartContext]);

    return (
        <header>
            <Button
                startIcon={
                    <Avatar alt="Shopping Cart Icon" sx={{ bgcolor: 'secondary.main' }}>
                        <AddShoppingCartIcon />
                    </Avatar>
                }
                sx={{
                    color: "black",
                    fontSize: "1.1rem",
                }}
                onClick={() => {
                    router.push('/checkout');
                }}
            >
                {`${title} (${cartItemCount})`}
            </Button>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                {children}
            </Box>
        </header>
    );
}
