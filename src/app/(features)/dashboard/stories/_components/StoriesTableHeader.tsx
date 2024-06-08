import React from 'react';

import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const StoriesTableHeader = () => {
    return (
        <CardHeader>
            <CardTitle>Stories</CardTitle>
            <CardDescription>
                A short statement to encourage people to pitch a new story right
                now
            </CardDescription>
        </CardHeader>
    );
};

export default StoriesTableHeader;
