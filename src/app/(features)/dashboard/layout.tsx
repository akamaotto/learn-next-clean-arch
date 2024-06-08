import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {useIsMounted} from 'usehooks-ts';

import MainFooter from '@/app/_components/MainFooter';
import MainHeader from '@/app/_components/MainHeader';

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
            <main className='mx-auto max-w-7xl px-4 py-28 sm:px-6'>
                {children}
            </main>
            <MainFooter />
        </body>
    );
}
