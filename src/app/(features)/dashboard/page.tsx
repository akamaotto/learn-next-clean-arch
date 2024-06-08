import * as React from 'react';

import { Card } from '@/components/ui/card';

import DashboardMetricCard from './_components/DashboardMetricCard';
import DashboardPitchStoryCTA from './_components/DashboardPitchStoryCTA';
import DashboardProfileSummary from './_components/DashboardProfileSummary';
import DashboardTopTechBloggers from './_components/DashboardTopTechBloggers';
import SeeAllStoriesLink from './stories/_components/SeeAllStoriesLink';
import StoriesTable from './stories/_components/StoriesTable';
import StoriesTableFotter from './stories/_components/StoriesTableFooter';
import StoriesTableHeader from './stories/_components/StoriesTableHeader';

export default function Dashboard() {
    return (
        <div className='flex min-h-screen w-full flex-col bg-muted/40'>
            <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
                <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'>
                    <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
                        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4'>
                            <DashboardPitchStoryCTA />
                            <DashboardMetricCard
                                period={'This quarter'}
                                value={0}
                                baseValue={9}
                                metric={'Stories pitched'}
                                progressPercentageValue={75}
                            />
                            <DashboardMetricCard
                                period={'This quarter'}
                                value={95}
                                baseValue={136}
                                metric={'Blogger impressions'}
                                progressPercentageValue={75}
                            />
                        </div>
                        <Card x-chunk='dashboard-05-chunk-3'>
                            <StoriesTableHeader />
                            <StoriesTable />
                            <StoriesTableFotter>
                                <SeeAllStoriesLink />
                            </StoriesTableFotter>
                        </Card>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <DashboardProfileSummary />
                        <DashboardTopTechBloggers />
                    </div>
                </main>
            </div>
        </div>
    );
}
