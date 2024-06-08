import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
    PersonalAccountUpdateDTO,
    personalAccountUpdateSchema,
} from '@/app/lib/types/personalAccountSchemaDTO';
import {usePersonalInfo, useUpdatePersonalInfo} from './hooks';
import React from 'react';

export function usePersonalInformationForm() {
    const {
        data: defaultValues,
        isLoading,
        isError,
        error: fetchError,
    } = usePersonalInfo();
    const methods = useForm<PersonalAccountUpdateDTO>({
        resolver: zodResolver(personalAccountUpdateSchema),
        defaultValues, // Set default values from fetched data
    });

    const {
        handleSubmit,
        reset,
        formState: {errors},
    } = methods;
    const {
        mutate,
        isError: isMutationError,
        error: mutationError,
    } = useUpdatePersonalInfo();

    React.useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    const onSubmit = (data: PersonalAccountUpdateDTO) => {
        mutate(data);
    };

    return {
        methods,
        handleSubmit,
        errors,
        onSubmit,
        isLoading,
        isError,
        fetchError,
        isMutationError,
        mutationError,
    };
}
