import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

import MainFooter from '@/app/_components/MainFooter';
import MainHeader from '@/app/_components/MainHeader';
import AccountsNav from './_components/AccountsNav';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Poblysh',
    description: 'Poblysh',
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body>
            <MainHeader />
            <main className='mx-auto max-w-7xl pt-20 px-4 sm:px-6'>
                <div className='flex w-full flex-col'>
                    <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10'>
                        <div className='mx-auto grid w-full max-w-6xl gap-2'>
                            <h1 className='text-3xl font-semibold'>
                                My Account
                            </h1>
                        </div>
                        <div className='mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
                            <AccountsNav />
                            <div className='grid gap-6'>{children}</div>
                        </div>
                    </main>
                </div>
            </main>
            <MainFooter />
        </body>
    );
}
