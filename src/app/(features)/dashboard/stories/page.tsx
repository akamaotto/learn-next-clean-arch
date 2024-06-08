import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent } from '@/components/ui/tabs';

import StoriesPageHeader from './_components/StoriesPageHeader';
import StoriesTable from './_components/StoriesTable';
import StoriesTableFotter from './_components/StoriesTableFooter';
import StoriesTableHeader from './_components/StoriesTableHeader';
import { StoriesTablePagination } from './_components/StoriesTablePagination';

export function Stories() {
    return (
        <div className='flex min-h-screen w-full flex-col bg-muted/40'>
            <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
                <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
                    <Tabs defaultValue='all'>
                        <StoriesPageHeader />
                        <TabsContent value='all'>
                            <Card x-chunk='dashboard-06-chunk-0'>
                                <StoriesTableHeader />
                                <StoriesTable />
                                <StoriesTableFotter>
                                    <StoriesTablePagination />
                                </StoriesTableFotter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    );
}

export default Stories;
