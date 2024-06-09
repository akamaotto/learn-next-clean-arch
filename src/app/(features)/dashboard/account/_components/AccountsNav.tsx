import Link from 'next/link';
import React from 'react';
import {Badge} from '@/components/ui/badge';

const AccountsNav = () => {
    return (
        <nav
            className='grid gap-4 text-sm text-muted-foreground max-w-[210px]'
        >
            <Link href={'/dashboard/account'} className='flex justify-between'>
                <span>Personal</span> <Badge variant='outline'>90%</Badge>
            </Link>


            <Link
                href={'/dashboard/account/founder'}
                className='flex justify-between'
            >
                <span>Founder</span> <Badge variant='destructive'>0%</Badge>
            </Link>
            <Link
                href={'/dashboard/account/company'}
                className='flex justify-between'
            >
                <span>Company</span>
            </Link>

            <span className='text-xs text-slate-400 '>
                You need to complete your account before you can pitch a story
            </span>
        </nav>
    );
};

export default AccountsNav;
