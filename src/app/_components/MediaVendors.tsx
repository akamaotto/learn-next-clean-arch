import Image from 'next/image';

import Laravel from '@/components/icons/laravel';
import Openai from '@/components/icons/openai';
import Paddle from '@/components/icons/paddle';
import Play from '@/components/icons/play';
import Razorpay from '@/components/icons/razorpay';
import Stripe from '@/components/icons/stripe';
import {Button} from '@/components/ui/button';

import Analytics from './Analytics';
import LoginButtons from './LoginButtons';
import ThemeBasedImage from './TheBasedImage';

const MediaVendors = () => {
    return (
        <>
            <div className='bg-slate-100 mb-12 '>
                <div className='container px-4 py-[75px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                    <Stripe className='mx-auto' />
                    <Paddle className='mx-auto' />
                    <Razorpay className='mx-auto' />
                    <Openai className='mx-auto' />
                    <Laravel className='mx-auto' />
                </div>
            </div>
        </>
    );
};

export default MediaVendors;
