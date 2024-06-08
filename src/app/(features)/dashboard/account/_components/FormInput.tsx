import React from 'react';
import {useFormContext, Controller} from 'react-hook-form';
import {Input} from '@/components/ui/input';
import {FormItem, FormLabel, FormMessage} from '@/components/ui/form';

interface FormInputProps {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
    disabled?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
    name,
    label,
    placeholder,
    type = 'text',
    disabled = false,
}) => {
    const {
        control,
        formState: {errors},
    } = useFormContext();

    const errorMessage = errors[name]?.message?.toString();

    return (
        <FormItem>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <Input
                        {...field}
                        id={name}
                        placeholder={placeholder}
                        type={type}
                        disabled={disabled}
                    />
                )}
            />
            {errorMessage && <FormMessage>{errorMessage}</FormMessage>}
        </FormItem>
    );
};

export default FormInput;
