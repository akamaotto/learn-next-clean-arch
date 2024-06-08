'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import {ChevronLeft, ChevronRight} from 'lucide-react';
import React, {useRef, useState} from 'react';
import {Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import LeftQuotation from '@/components/icons/left-quotation';
import RightQuotation from '@/components/icons/right-quotation';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Button} from '@/components/ui/button';

const Testimonials = () => {
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
            setActiveIndex(swiperRef.current.swiper.activeIndex);
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
            setActiveIndex(swiperRef.current.swiper.activeIndex);
        }
    };

    return (
        <div className='bg-slate-100 py-24'>
            <div className='w-full max-w-[1000px] relative mx-auto px-4  '>
                <Swiper
                    loop={true}
                    className='mySwiper'
                    pagination={{clickable: true}}
                    modules={[Pagination, Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                >
                    <SwiperSlide>
                        <div className='relative px-6 pb-8 pt-8 text-2xl font-light text-secondary-foreground space-y-4'>
                            <p className=''>
                                Earned media, endorsed by third parties, is the
                                most trusted among the three media pillars, with
                                a YouGov survey indicating over 90% consumer
                                trust, in contrast to the 50% trust in paid ads.{' '}
                            </p>
                            <p>
                                Historically, leveraging earned media required a
                                focused PR strategy targeting traditional
                                outlets. In today’s digital age, while the core
                                PR strategy remains vital, the range of media
                                outlets available has expanded significantly.
                            </p>
                        </div>
                        <div className='mt-6 flex items-center '>
                            <Avatar className='w-[70px] h-[70px] mr-4'>
                                <AvatarImage src='#' alt='@shadcn' />
                                <AvatarFallback className='bg-red-600'>
                                    <span className='text-white'>EM</span>
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className='text-2xl font-semibold text-gray-800'>
                                    Entrepreneur Magazine
                                </p>
                                <p className='text-secondary-foreground'>
                                    Insights drawn from What Is Earned Media and
                                    What Is Its Value? on entrepreneur.com
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className='absolute bottom-4 right-4 z-10'>
                    <Button
                        size='icon'
                        variant='outline'
                        className='custom-prev rounded-full mr-2'
                        onClick={goPrev}
                    >
                        <ChevronLeft className='w-4 h-4' />
                    </Button>
                    <Button
                        size='icon'
                        variant='outline'
                        className='custom-next rounded-full'
                        onClick={goNext}
                    >
                        <ChevronRight className='w-4 h-4' />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
