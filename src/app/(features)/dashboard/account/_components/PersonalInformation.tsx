import React from 'react';
import {FormProvider} from 'react-hook-form';
import {usePersonalInformationForm} from '../controllers/actions';
import FormInput from './FormInput';

export function PersonalInformationForm() {
    const {
        methods,
        handleSubmit,
        errors,
        onSubmit,
        isLoading,
        isError,
        fetchError,
        isMutationError,
        mutationError,
    } = usePersonalInformationForm();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {fetchError?.message}</p>;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput name='name' label='Name' placeholder='Your name' />
                <FormInput
                    name='email'
                    label='Email'
                    placeholder='Your email'
                    disabled
                />
                <button type='submit'>Save changes</button>
                {isMutationError && <p>Error: {mutationError?.message}</p>}
            </form>
        </FormProvider>
    );
}

export default PersonalInformationForm;
