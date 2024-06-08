import Link from 'next/link';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CardContent } from '@/components/ui/card';

interface Props {
    bloggerAvatarURL: string;
    bloggerName: string;
    blogName: string;
    linkedInURL: string;
}

const DashboardSingleTechBlogger = ({
    bloggerAvatarURL,
    bloggerName,
    blogName,
    linkedInURL,
}: Props) => {
    return (
        <Link href={linkedInURL}>
            <CardContent className='grid gap-8'>
                <div className='flex items-center gap-4'>
                    <Avatar className='hidden h-9 w-9 sm:flex'>
                        <AvatarImage src={bloggerAvatarURL} alt='Avatar' />
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className='grid gap-1'>
                        <p className='text-sm font-medium leading-none'>
                            {bloggerName}
                        </p>
                        <p className='text-xs text-muted-foreground'>
                            <span className='text-sky-500'>{blogName}</span>
                        </p>
                    </div>
                </div>
            </CardContent>
        </Link>
    );
};

export default DashboardSingleTechBlogger;
