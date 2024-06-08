import React from 'react';

import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import profile from '@/components/icons/profile';
import {Upload} from 'lucide-react';
import Link from 'next/link';
// Replace 'your-image-package' with the actual package name

const CompanyLogo = () => {
    return (
        <Link href={'#'}>
            <div className='flex flex-row align-middle justify-start gap-4'>
                <div className='relative'>
                    <Avatar className='w-36 h-36'>
                        <AvatarImage src='https://github.com/shadcn.png' />
                        <AvatarFallback>Upload Logo</AvatarFallback>
                    </Avatar>
                    <span className='absolute bottom-0 right-6 transform flex justify-center items-center translate-y-1/4 w-12 h-12 bg-slate-100 hover:bg-slate-800 border-2 border-white dark:border-gray-800 rounded-full'>
                        <Upload className='w-4 h-4 text-slate-400 hover:text-white-800 ' />
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default CompanyLogo;
