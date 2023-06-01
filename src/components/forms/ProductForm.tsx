import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Chip, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IProduct } from "@/interfaces/product";

interface ProductFormProps {
    onSubmit: (data: any) => void;
    editValues?: IProduct | null;
}

export default function ProductForm({ onSubmit, editValues }: ProductFormProps) {
    const defaultValues = {
        name: "",
        price: 0,
        description: "",
        imageUrl: "",
    };

    const productFormSchema = yup.object().shape({
        name: yup.string().required('A product name is required.'),
        price: yup.number().required('A product price is required.'),
        description: yup.string(),
        imageUrl: yup.string().required('A product image URL is required.'),
    });

    const { control: formControl, watch, reset, handleSubmit } = useForm({
        defaultValues: editValues || defaultValues,
        resolver: yupResolver(productFormSchema),
        mode: 'onChange',
    });

    const imageUrlValue = watch('imageUrl');

    return (
        <form
            id="product-form"
            onReset={() => reset(defaultValues)}
            onSubmit={handleSubmit(onSubmit)}
            style={{ padding: '24px' }}
        >
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Controller
                        name="name"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="Product Name"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        name="price"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="Product Price"
                                variant="outlined"
                                fullWidth
                                type="number"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="description"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="Product Description"
                                variant="outlined"
                                fullWidth
                                multiline
                                minRows={2}
                                maxRows={4}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="imageUrl"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="Product Image URL"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                {imageUrlValue && (
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image
                            src={imageUrlValue}
                            alt="Product Image"
                            width={250}
                            height={150}
                        />
                    </Grid>
                )}
            </Grid>
        </form>
    );
}
