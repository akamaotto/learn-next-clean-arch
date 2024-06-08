import Link from 'next/link';
import React from 'react';

import { CardFooter } from '@/components/ui/card';

import SeeAllStoriesLink from './SeeAllStoriesLink';

interface StoriesTableFotterProps {
    children: React.ReactNode;
}

const StoriesTableFotter = ({children}: StoriesTableFotterProps) => {
    return <CardFooter>{children}</CardFooter>;
};

export default StoriesTableFotter;
