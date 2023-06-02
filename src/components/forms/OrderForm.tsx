import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Image from "next/image";
import { IOrder } from "@/interfaces/order";

interface OrderFormProps {
    onSubmit: (data: any) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
    const defaultValues = {
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        phone: "",
        email: "",
    };

    const orderFormSchema = yup.object().shape({
        firstName: yup.string().required('A first name is required.'),
        lastName: yup.string().required('A last name is required.'),
        address1: yup.string().required('An address is required.'),
        address2: yup.string(),
        city: yup.string().required('A city is required.'),
        state: yup.string().required('A state is required.'),
        zip: yup.string().required('A zip is required.'),
        country: yup.string().required('A country is required.'),
        phone: yup.string().required('A phone number is required.'),
        email: yup.string().required('An email is required.'),
    });

    const { control: formControl, watch, reset, handleSubmit } = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(orderFormSchema),
        mode: 'onChange',
    });

    return (
        <form
            id="order-form"
            onReset={() => reset(defaultValues)}
            onSubmit={handleSubmit(onSubmit)}
            style={{ padding: '24px' }}
        >
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Controller
                        name="firstName"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name="lastName"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="address1"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="Address 1"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="address2"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="Address 2"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="city"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="City"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="state"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="State"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="zip"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="Zip"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="country"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="Country"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="phone"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="Phone"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="email"
                        control={formControl}
                        render={({ field, fieldState }: { field: any; fieldState: any }) => (
                            <TextField
                                {...field}
                                label="Email"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </form>
    );
}