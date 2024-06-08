import React from 'react';

import CompanyArticleParagraph from '../_components/CompanyArticleParagraph';
import CompanyArticleSectionSubtitle from '../_components/CompanyArticleSectionSubtitle';
import CompanyArticleSectionTitle from '../_components/CompanyArticleSectionTitle';
import CompanyListItem from '../_components/CompanyListItem';
import CompanyPageSubTitle from '../_components/CompanyPageSubTitle';
import CompanyPageTitle from '../_components/CompanyPageTitle';

export const metadata = {
    title: 'About Us - Poblysh',
    description: 'Promoting African Innovation, One Story at a Time',
};

const About = () => {
    return (
        <>
            <CompanyPageTitle text='About Poblysh' />
            <CompanyPageSubTitle text='Promoting African Innovation, One Story at a Time' />
            <article className='pt-4'>
                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Our Mission' />
                    <CompanyArticleParagraph>
                        At Poblysh, we are passionate about showcasing the
                        incredible innovation and entrepreneurship happening
                        across Africa. We believe that every startup has a story
                        worth telling, and we are here to help you share it with
                        the world.
                    </CompanyArticleParagraph>
                    <CompanyArticleParagraph>
                        Our mission is to empower African startups to connect
                        with journalists and media outlets, making it easier
                        than ever to get your story heard and amplify your
                        impact.
                    </CompanyArticleParagraph>
                </section>
                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Our Vision' />
                    <CompanyArticleParagraph>
                        We envision a vibrant African tech ecosystem where
                        startups are celebrated, journalists have access to a
                        wealth of compelling stories, and the world understands
                        the true potential of African innovation.
                    </CompanyArticleParagraph>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Why Choose Poblysh?' />
                    <CompanyArticleSectionSubtitle text='For Startup Founders' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem
                                listItemTitle='Simplify PR'
                                listItemDescription='Share your story effortlessly without the
                                    need for extensive self-promotion.'
                            />
                            <CompanyListItem
                                listItemTitle='Reach the Right Audience'
                                listItemDescription='Connect with journalists who are genuinely
                            interested in your industry and niche.'
                            />
                            <CompanyListItem
                                listItemTitle='Save Time and Effort'
                                listItemDescription='Focus on building your business, not crafting
                            press releases.'
                            />
                        </ul>
                    </div>
                    <CompanyArticleSectionSubtitle text='For Journalists' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem
                                listItemTitle='Discover Hidden Gems'
                                listItemDescription='Uncover unique and compelling stories from across Africa.'
                            />
                            <CompanyListItem
                                listItemTitle='Streamline Your Workflow'
                                listItemDescription='Get access to pre-packaged content and high-quality visuals.'
                            />
                            <CompanyListItem
                                listItemTitle='Build Relationships'
                                listItemDescription='Connect directly with founders for exclusive interviews and insights.'
                            />
                        </ul>
                    </div>
                </section>
                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Our Values' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem
                                listItemTitle='Authenticity'
                                listItemDescription='Uncover unique and compelling stories from across Africa.'
                            />
                            <CompanyListItem
                                listItemTitle='Collaboration'
                                listItemDescription='We believe in the power of partnership and mutual support.'
                            />
                            <CompanyListItem
                                listItemTitle='Innovation'
                                listItemDescription='We constantly strive to improve and evolve our platform to meet the needs of our users.'
                            />
                            <CompanyListItem
                                listItemTitle='Impact'
                                listItemDescription='We are committed to making a positive impact on the African tech ecosystem and beyond.'
                            />
                        </ul>
                    </div>
                </section>
                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Contact Us' />
                    <CompanyArticleParagraph>
                        For any inquiries, reach out to founder@poblysh.com
                    </CompanyArticleParagraph>
                </section>
            </article>
        </>
    );
};

export default About;
