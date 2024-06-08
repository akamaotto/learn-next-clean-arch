'use client';
import { useSession } from 'next-auth/react';

import CompanyNavigationMenu from '@/app/(features)/(company)/_components/CompanyNavigationMenu';

const MainFooter = () => {
    const session = useSession();
    return (
        <footer className='fixed bottom-0 left-0 z-20 w-full px-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600'>
            <span className='text-sm mx-auto px-4 text-gray-500 sm:text-center dark:text-gray-400'>
                © 2024{' '}
                <a href='/' className='hover:underline'>
                    Poblysh
                </a>
                . All Rights Reserved.
            </span>
            {!session && <CompanyNavigationMenu />}
        </footer>
    );
};

export default MainFooter;
