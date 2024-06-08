
import React from 'react';

import { signOut } from '@/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const DashboardNavAvatar = () => {
    return (
        <div className='flex items-center justify-end'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className='w-8 h-8 cursor-pointer'>
                        <AvatarImage
                            src='https://github.com/shadcn.png'
                            alt='@shadcn'
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align='end'>
                    <DropdownMenuItem>Profile</DropdownMenuItem>

                        <DropdownMenuItem>Log Out</DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default DashboardNavAvatar;
