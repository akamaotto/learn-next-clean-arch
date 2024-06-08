import type {Metadata} from 'next';
import './globals.css';

import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import MainFooter from './_components/MainFooter';
import MainHeader from './_components/MainHeader';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Poblysh - Get Your Startup Featured in Nigeria Tech News – Every Month',
    description:
        'Effortlessly share your updates with top bloggers. Gain the credibility you need to raise funds, seal deals, and sell more.',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
    metadata,
}: Readonly<{
    children: React.ReactNode;
    metadata: Metadata;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <SessionProvider>
                    <MainHeader />
                    {children}
                    <MainFooter />
                </SessionProvider>
            </body>
        </html>
    );
}
