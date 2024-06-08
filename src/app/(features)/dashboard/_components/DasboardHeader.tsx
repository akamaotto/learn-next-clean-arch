'use client';
import Link from 'next/link';
import {HTMLAttributes} from 'react';

import PoblyshLogo from '@/app/_components/PoblyshLogo';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {cn} from '@/app/lib/utils';

import DashboardNavAvatar from './DashboardNavAvatar';
import DashboardNavigationMenu from './DashboardNavigationMenu';

type Props = HTMLAttributes<HTMLDivElement>;

const DashboardNavbar = ({className, ...props}: Props) => {
    return (
        <div className={cn('', className)} {...props}>
            <div className='py-4 px-7 grid grid-cols-3'>
                <div className='flex'>
                    <PoblyshLogo />
                </div>
                <DashboardNavigationMenu />
                <DashboardNavAvatar />
            </div>
        </div>
    );
};

export default DashboardNavbar;
