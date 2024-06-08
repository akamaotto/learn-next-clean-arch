import {NotebookPen, Rss, UserPlus} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const WhyPoblysh = () => {
    return (
        <div className='bg-slate-100 py-24'>
            <div className='container px-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg'>
                <h4 className='font-light text-5xl'>Why Poblysh</h4>
                <div>
                    <p className='mb-8 text-lg font-light'>
                        Tired of your startup struggling to gain traction?
                        Exhausted from the endless hustle for funding, partners,
                        and customers? In a crowded Nigerian market, it is easy
                        for your business to get lost in the noise.
                    </p>
                    <p className='mb-8 text-lg font-light'>
                        You have poured your heart and soul into your company,
                        but without visibility, you are missing out on valuable
                        opportunities. Potential investors are unaware of your
                        innovative solutions. Customers who need your products
                        or services simply cannot find you.
                    </p>

                    <p className='mb-8 text-lg font-light'>
                        Poblysh is your technical media partner in the Nigerian
                        market. We amplify your voice, boost your visibility,
                        and connect you with the right people to fuel your
                        growth.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyPoblysh;
