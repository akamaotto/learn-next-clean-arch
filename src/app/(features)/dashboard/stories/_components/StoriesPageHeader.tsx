import {PlusCircle} from 'lucide-react';
import React from 'react';

import {Button} from '@/components/ui/button';
import {TabsList, TabsTrigger} from '@/components/ui/tabs';

import SearchBox from './SearchBox';
import Link from 'next/link';

const StoriesPageHeader = () => {
    return (
        <div className='flex items-center'>
            <TabsList>
                <TabsTrigger value='all'>All</TabsTrigger>
                <TabsTrigger value='drafts'>Drafts</TabsTrigger>
                <TabsTrigger value='sent'>Sent</TabsTrigger>
                <TabsTrigger value='published'>Published</TabsTrigger>
            </TabsList>

            <div className='ml-auto flex items-center gap-2'>
                <SearchBox
                    lgWidth='30px'
                    mdWidth='250px'
                    placeholder='Search stories...'
                />
                <Link href='/dashboard/stories/create'>
                    <Button size='sm' className='h-9 gap-2'>
                        <PlusCircle className='h-4 w-4' />
                        <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                            New Story
                        </span>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default StoriesPageHeader;
