import { Button, Avatar, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface HeaderProps {
    title: string;
    children: React.ReactNode;
}

export default function Header({ title, children }: HeaderProps): JSX.Element {
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
            >
                {title}
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
