import Image from 'next/image';
import React from 'react';

import LoginButtons from './LoginButtons';

const Analytics = () => {
    return (
        <div className='max-w-screen-xl mx-auto relative bg-no-repeat bg-center'>
            <div className='container px-4 pt-20 flex flex-col md:flex-row items-center justify-between gap-20'>
                <div className='max-w-[500px] text-center md:text-start'>
                    <h4 className='font-semibold font-sans text-3xl'>
                        Ready to get your story on Nigeria{"'"}s leading Tech
                        Blogs?
                    </h4>
                    <p className='font-normal text-gray-500 my-9'>
                        Do not let your lack of connections hold you back.
                        <br />
                        Poblysh opens the door to media exposure, even if you
                        are shy or afraid of rejection.
                    </p>
                    <LoginButtons />
                </div>
                <div>
                    <Image
                        width={620}
                        height={450}
                        className='mx-auto mb-5 lg:mb-8 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 z-1 dark:hidden'
                        src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup.svg'
                        alt='dashboard overview'
                    />
                </div>
            </div>
        </div>
    );
};

export default Analytics;
