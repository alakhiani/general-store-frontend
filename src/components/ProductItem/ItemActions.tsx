import { Button } from "@mui/material";
import React from "react";

interface ItemActionsProps {
    id: string;
    onEdit?: () => void;
    onDelete?: () => void;
    onAddToCart?: () => void;
    onRemoveFromCart?: () => void;
}

const ItemActions: React.FC<ItemActionsProps> = ({ id, onEdit, onDelete, onAddToCart, onRemoveFromCart }) => {

    return (
        <>
            {
                !!onEdit && !!onDelete ? (
                    <>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={onEdit}
                            color="warning"
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={onDelete}
                            color="error"
                        >
                            Delete
                        </Button>
                    </>
                ) : (
                    !!onAddToCart ? (
                        <>
                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                onClick={onAddToCart}
                            >
                                Add to Cart
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                onClick={onRemoveFromCart}
                            >
                                Remove from Cart
                            </Button>
                        </>
                    )
                )
            }
        </>
    );
};

export default ItemActions;