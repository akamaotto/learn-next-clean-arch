import Link from 'next/link';
import React from 'react';

import { TableCell, TableRow } from '@/components/ui/table';

interface Prop {
    title: string;
    storyUrl: string;
    bloggersPitched: number;
    pitchedOn: string;
}

const DashboardTableRow = ({
    title,
    bloggersPitched,
    pitchedOn,
    storyUrl,
}: Prop) => {
    return (
        <TableRow className='bg-accent'>
            <TableCell>
                <div className='font-base hover:underline cursor-pointer text-slate-600'>
                    <Link href={storyUrl}>{title}</Link>
                </div>
            </TableCell>
            <TableCell className='hidden sm:table-cell text-center text-slate-600'>
                {bloggersPitched}
            </TableCell>

            <TableCell className='hidden md:table-cell text-right text-slate-600'>
                {pitchedOn}
            </TableCell>
        </TableRow>
    );
};

export default DashboardTableRow;
