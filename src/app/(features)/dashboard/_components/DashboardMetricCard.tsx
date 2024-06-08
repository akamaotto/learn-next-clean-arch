import React from 'react';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Prop {
    period: string;
    value: number;
    baseValue: number;
    metric: string;
    progressPercentageValue: number;
}

const DashboardMetricCard = ({
    period,
    value,
    baseValue,
    metric,
    progressPercentageValue,
}: Prop) => {
    return (
        <Card x-chunk='dashboard-05-chunk-1'>
            <CardHeader className='pb-2'>
                <CardDescription>{period}</CardDescription>
                <CardTitle>
                    <span className='text-4xl'>{value}/</span>
                    <span className='text-md font-normal'>{baseValue}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className='text-xs text-muted-foreground'>{metric}</div>
            </CardContent>
            <CardFooter>
                <Progress
                    value={progressPercentageValue}
                    aria-label='25% increase'
                />
            </CardFooter>
        </Card>
    );
};

export default DashboardMetricCard;
