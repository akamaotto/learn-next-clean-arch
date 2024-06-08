import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

import DashboardTableRow from '../../_components/DashboardTableRow';
import SeeAllStoriesLink from './SeeAllStoriesLink';
import StoriesTableFotter from './StoriesTableFooter';
import StoriesTableHeader from './StoriesTableHeader';

const stories = [
    {
        title: 'Implementation of the lucide icon library for react applications',
        storyUrl:
            '/story/implementation-of-the-lucide-icon-library-for-react-applications',
        bloggersPitched: 22,
        pitchedOn: '2023-06-23',
    },
    {
        title: 'Implementation of the lucide icon library for react applications',
        storyUrl:
            '/story/implementation-of-the-lucide-icon-library-for-react-applications',
        bloggersPitched: 22,
        pitchedOn: '2023-06-23',
    },
    {
        title: 'Implementation of the lucide icon library for react applications',
        storyUrl:
            '/story/implementation-of-the-lucide-icon-library-for-react-applications',
        bloggersPitched: 22,
        pitchedOn: '2023-06-23',
    },
];

const StoriesTable = () => {
    return (
        <>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-3/4 font-bold text-sm'>
                                Stories
                            </TableHead>

                            <TableHead className=' w-1/12 hidden md:table-cell text-center font-bold text-sm'>
                                Pitches
                            </TableHead>
                            <TableHead className='w-1/6 text-right font-bold text-sm'>
                                Pitched on
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {stories.map((story) => (
                            <DashboardTableRow
                                key={story.title}
                                title={story.title}
                                storyUrl={story.storyUrl}
                                bloggersPitched={story.bloggersPitched}
                                pitchedOn={story.pitchedOn}
                            />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </>
    );
};

export default StoriesTable;
