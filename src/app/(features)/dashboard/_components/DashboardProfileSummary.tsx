import React from 'react';

import {Button} from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {Progress} from '@/components/ui/progress';
import Link from 'next/link';

const DashboardProfileSummary = () => {
    return (
        <Card className='overflow-hidden' x-chunk='dashboard-05-chunk-4'>
            <CardHeader className='flex flex-row items-start bg-muted/50'>
                <div className='space-y-4 w-full'>
                    <CardTitle className='group flex items-center gap-2 text-lg'>
                        Profile Summary
                    </CardTitle>
                    <CardDescription className='space-y-4'>
                        <div className='flex flex-col space-y-4 w-full'>
                            <div className='space-y-1'>
                                <strong>Personal info </strong>- 33% complete
                                <Progress value={33} className='w-full' />
                            </div>

                            <div className='space-y-1'>
                                <strong>Founder info </strong>- 75% complete
                                <Progress value={75} className='w-full' />
                            </div>

                            <div className='space-y-1'>
                                <strong>Company info </strong>- 0% complete
                                <Progress value={0} className='w-full' />
                            </div>
                        </div>
                    </CardDescription>
                </div>
            </CardHeader>

            <CardFooter className='flex flex-col space-y-2 justify-center items-center border-t bg-muted/50 px-6 py-3'>
                <div className='text-xs text-muted-foreground'>
                    Complete your profile to pitch your story
                </div>
                <Link href='/dashboard/account'>
                    <Button>Complete profile </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default DashboardProfileSummary;
