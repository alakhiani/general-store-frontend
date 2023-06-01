import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

interface ItemActionsProps {
    id: string;
    onEdit?: () => void;
    onDelete?: () => void;
}

const ItemActions: React.FC<ItemActionsProps> = ({ id, onEdit, onDelete }) => {

    const router = useRouter();

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
                    <>
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            onClick={() => router.push(`/product/${id}`)}
                        >
                            Add to Cart
                        </Button>
                    </>
                )
            }
        </>
    );
};

export default ItemActions;