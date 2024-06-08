'use client';
import {useSession} from 'next-auth/react';
import React from 'react';

import CompanyNavigationMenu from '@/app/(features)/(company)/_components/CompanyNavigationMenu';
import DashboardNavAvatar from '@/app/(features)/dashboard/_components/DashboardNavAvatar';
import DashboardNavigationMenu from '@/app/(features)/dashboard/_components/DashboardNavigationMenu';

import PoblyshLogo from './PoblyshLogo';

const MainHeader = () => {
    const session = useSession();
    if (session !== null) {
        return (
            <>
                <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
                    <div className='mx-auto max-w-[1200px] px-4 flex flex-wrap items-center justify-between py-4'>
                        <PoblyshLogo />
                        {session && <DashboardNavigationMenu />}
                        {session ? (
                            <DashboardNavAvatar />
                        ) : (
                            <CompanyNavigationMenu />
                        )}
                    </div>
                </nav>
            </>
        );
    } else {
        return (
            <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4'>
                    <PoblyshLogo />
                    <span></span>
                    <span></span>
                </div>
            </nav>
        );
    }
};

export default MainHeader;
