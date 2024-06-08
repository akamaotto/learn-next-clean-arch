import { Navbar } from 'flowbite-react/components/Navbar';
import { Inter } from 'next/font/google';

import MainFooter from '@/app/_components/main-footer';

const inter = Inter({subsets: ['latin']});

export default function CompanyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='max-w-screen-md px-4 mx-auto py-28 lg:px-16 border-l-2 border-slate-100 border-r-2 min-h-svh'>
            <div className={inter.className}>
                <Navbar />
                {children}
                <MainFooter />
            </div>
        </div>
    );
}
