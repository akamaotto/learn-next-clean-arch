import Link from 'next/link';
import React from 'react';

const SeeAllStoriesLink = () => {
    return (
        <Link href={'/stories'} className='underline'>
            See all stories
        </Link>
    );
};

export default SeeAllStoriesLink;
