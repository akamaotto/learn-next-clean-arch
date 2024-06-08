import {NotebookPen, Rss, UserPlus} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const WithPoblysh = () => {
    return (
        <div>
            <section className='bg-white dark:bg-gray-900'>
                <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6 '>
                    <Image
                        className='mb-4 w-full lg:mb-0 rounded-lg'
                        src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-long.png'
                        alt='feature image'
                        width={600}
                        height={800}
                    />
                    <div className='text-gray-500 dark:text-gray-400 sm:text-lg'>
                        <h2 className='mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white'>
                            With Poblysh, You Can
                        </h2>

                        <div className='py-8 mb-6 border-t border-b border-gray-200 dark:border-gray-700'>
                            <div className='flex'>
                                <div>
                                    <h3 className='mb-2 text-xl font-bold text-gray-900 dark:text-white'>
                                        Boost Your Visibility
                                    </h3>
                                    <p className='mb-2 font-light text-gray-500 dark:text-gray-400'>
                                        Reach thousands of potential investors,
                                        customers, and partners across Nigeria.
                                    </p>
                                </div>
                            </div>
                            <div className='flex pt-8'>
                                <div>
                                    <h3 className='mb-2 text-xl font-bold text-gray-900 dark:text-white'>
                                        Build Credibility & Trust
                                    </h3>
                                    <p className='mb-2 font-light text-gray-500 dark:text-gray-400'>
                                        Establish yourself as a thought leader
                                        and gain the trust of your target
                                        audience.
                                    </p>
                                </div>
                            </div>
                            <div className='flex pt-8'>
                                <div>
                                    <h3 className='mb-2 text-xl font-bold text-gray-900 dark:text-white'>
                                        Drive Business Growth
                                    </h3>
                                    <p className='mb-2 font-light text-gray-500 dark:text-gray-400'>
                                        Generate leads, secure funding, and
                                        increase sales through targeted media
                                        exposure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WithPoblysh;
