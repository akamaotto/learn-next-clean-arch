import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

import LoginButtons from './LoginButtons';

const Hero = () => {
    return (
        <>
            <section>
                <div className='max-w-screen-xl px-4 mx-auto text-center pt-28 lg:px-16'>
                    <h1 className=' lg:px-24 mb-4 text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-white'>
                        Get your startup featured in
                        <br /> Nigerian tech news{' '}
                        <span className='text-slate-300'>– every month.</span>
                    </h1>
                    <p className='mb-8 font-light text-gray-500 md:text-md lg:text-md sm:px-16 xl:px-48 dark:text-gray-400'>
                        You post your startup news. We send it to tech bloggers.{' '}
                        <br />
                        <strong>
                            Gain the credibility you need to raise funds, seal
                            deals, and sell more.
                        </strong>
                    </p>
                    <LoginButtons />
                    <div>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-4 mb-10'>
                            <p className='flex items-center'>
                                <CheckCircle className='mr-2 w-5 h-5' />
                                <span className='mr-4'>
                                    No credit card required
                                </span>
                            </p>
                            <p className='flex items-center'>
                                <CheckCircle className='mr-2 w-5 h-5' />
                                <span className='mr-4'>
                                    No media connections required
                                </span>
                            </p>
                            <p className='flex items-center'>
                                <CheckCircle className='mr-2 w-5 h-5' />
                                <span>Great for introverted founders</span>
                            </p>
                        </div>
                    </div>
                    <Image
                        width={850}
                        height={600}
                        className='mx-auto mb-5 lg:mb-8 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 z-1 dark:hidden'
                        src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup.svg'
                        alt='dashboard overview'
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;
