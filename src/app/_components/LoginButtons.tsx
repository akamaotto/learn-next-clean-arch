import React from 'react';
import { FaGoogle, FaLinkedinIn } from 'react-icons/fa';

import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';

const LoginButtons = () => {
    return (
        <div>
            <div className='flex flex-col mb-3 lg:mb-10 space-y-4 sm:flex-row sm:justify-center items-center sm:space-y-0 sm:space-x-4'>
                <form
                    action={async () => {
                        'use server';
                        await signIn('google', {redirectTo: '/dashboard'});
                    }}
                >
                    <Button className='w-60'>
                        <FaGoogle className='mr-3 text-red-500' /> Contine with
                        Google
                    </Button>
                </form>
                <form
                    action={async () => {
                        'use server';
                        await signIn('linkedin', {redirectTo: '/dashboard'});
                    }}
                >
                    <Button className='w-60'>
                        {' '}
                        <FaLinkedinIn className='mr-3 text-blue-400' /> Continue
                        with LinkedIn
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LoginButtons;
