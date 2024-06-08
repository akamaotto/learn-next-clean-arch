import Link from 'next/link';
import React from 'react';

const CompanyNavigationMenu = () => {
    return (
        <div className=' flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-4'>
            <Link href={'/about'}>About</Link>
            <Link href={'/privacy'}>Privacy</Link>
            <Link href={'/terms'}>Terms</Link>
        </div>
    );
};

export default CompanyNavigationMenu;
