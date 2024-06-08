import React from 'react';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const DashboardPitchStoryCTA = () => {
    return (
        <Card className='sm:col-span-2' x-chunk='dashboard-05-chunk-0'>
            <CardHeader className='pb-3'>
                <CardTitle>What&apos;s new at your startup?</CardTitle>
                <CardDescription className='max-w-lg text-balance leading-relaxed'>
                    When you pitch a story, we improve your pitch and share it
                    with all tech bloggers in Nigeria.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button>Pitch a story</Button>
            </CardFooter>
        </Card>
    );
};

export default DashboardPitchStoryCTA;
