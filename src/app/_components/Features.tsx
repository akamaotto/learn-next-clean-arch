import {NotebookPen, Rss, UserPlus} from 'lucide-react';
import React from 'react';

import {Card, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';

const Features = () => {
    return (
        <div className='max-w-screen-xl mx-auto pt-24 px-4 mb-36'>
            <div className='max-w-[600px] mx-auto text-center mb-[40px]'>
                <p className='font-bold text-3xl text-secondary-foreground'>
                    HOW IT WORKS
                </p>
                <p className='font-medium text-secondary-foreground mt-4 text-grey-400'>
                    Start sharing updates with Nigerian Tech Bloggers in 3 easy
                    steps
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <Card>
                    <CardHeader>
                        <CardTitle>Create Your Profile</CardTitle>
                    </CardHeader>

                    <UserPlus className='ml-6 mb-6' size={36} />
                    <CardFooter>
                        <p>
                            Tell us about your company, your product, and your
                            vision.
                        </p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Craft Your Pitch</CardTitle>
                    </CardHeader>
                    <NotebookPen className='ml-6 mb-6' size={36} />
                    <CardFooter>
                        <p>
                            Share your latest news, milestones, or product
                            launches.
                        </p>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>We Broadcast Your Story</CardTitle>
                    </CardHeader>
                    <Rss className='ml-6 mb-6' size={36} />
                    <CardFooter>
                        <p>
                            We will get your update in front of the most
                            influential tech bloggers in Nigeria.
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Features;
