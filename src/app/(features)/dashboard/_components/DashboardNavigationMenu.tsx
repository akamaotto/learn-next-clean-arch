import Link from 'next/link';
import React from 'react';

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const DashboardNavigationMenu = () => {
    return (
        <div className='flex justify-center'>
            <NavigationMenu>
                <NavigationMenuList className='gap-4'>
                    <NavigationMenuItem>
                        <Link
                            key={'dashboard'}
                            href='/dashboard'
                            className={navigationMenuTriggerStyle()}
                        >
                            <NavigationMenuLink>Dashboard</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            key={'stories'}
                            href='/dashboard/stories'
                            className={navigationMenuTriggerStyle()}
                        >
                            <NavigationMenuLink>Stories</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            key={'account'}
                            href='/dashboard/account'
                            className={navigationMenuTriggerStyle()}
                        >
                            <NavigationMenuLink>Account</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default DashboardNavigationMenu;
