import { Metadata } from 'next';

import Analytics from './_components/Analytics';
import Features from './_components/Features';
import Hero from './_components/Hero';
import MediaVendors from './_components/MediaVendors';
import { PoblyshFAQs } from './_components/PoblyshFAQs';
import Testimonials from './_components/Testimonial';
import WhyPoblysh from './_components/WhyPoblysh';
import WithPoblysh from './_components/WithPoblysh';

export const metadata: Metadata = {
    title: 'Poblysh - Your technical media partner',
    description:
        'Get your startup featured in nigerian tech news every month. Gain the credibility you need to raise funds, seal deals, and sell more.',
};

export default function Home() {
    return (
        <main>
            <Hero />
            <Features />
            <WhyPoblysh />
            <WithPoblysh />
            <Testimonials />
            <Analytics />
            <div className='relative z-10 -mt-20'>
                <MediaVendors />
            </div>
            <PoblyshFAQs />
        </main>
    );
}
