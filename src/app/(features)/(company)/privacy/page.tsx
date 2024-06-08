import React from 'react';

import CompanyArticleParagraph from '../_components/CompanyArticleParagraph';
import CompanyArticleSectionSubtitle from '../_components/CompanyArticleSectionSubtitle';
import CompanyArticleSectionTitle from '../_components/CompanyArticleSectionTitle';
import CompanyListItem from '../_components/CompanyListItem';
import CompanyPageTitle from '../_components/CompanyPageTitle';
import CompanyLayout from '../layout';

export const metadata = {
    title: 'Privacy Policy - Poblysh',
    description:
        'Read our privacy policy to learn about how we collect, use, and protect your personal information on Poblysh.',
};

const PrivacyPolicy = () => {
    return (
        <>
            <CompanyPageTitle text='Privacy Policy' />

            <article className='pt-4'>
                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Introduction' />
                    <CompanyArticleParagraph>
                        At Poblysh, we are committed to protecting your privacy.
                        This Privacy Policy outlines how we collect, use, and
                        disclose your personal information as you interact with
                        our platform.
                    </CompanyArticleParagraph>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Information We Collect' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem listItemDescription='Name, email address, and phone number (optional)' />
                            <CompanyListItem listItemDescription='Social media profile details (if using social login)' />
                            <CompanyListItem listItemDescription='Company information (for founders)' />
                            <CompanyListItem listItemDescription='Publication affiliation (for journalists)' />
                            <CompanyListItem listItemDescription='Bio, interests, and contact preferences' />
                        </ul>
                    </div>
                    <CompanyArticleSectionSubtitle text='Story Pitch Information' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem listItemDescription='Title, hook, description, images, and media files' />
                            <CompanyListItem listItemDescription='Company details (for founders)' />
                        </ul>
                    </div>
                    <CompanyArticleSectionSubtitle text='Usage Data' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem listItemDescription='IP address, browser type, and device information' />
                            <CompanyListItem listItemDescription='Pages visited and interactions on the platform' />
                            <CompanyListItem listItemDescription='Referral sources' />
                        </ul>
                    </div>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='How We Use Your Information' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem listItemDescription='Create and manage your user account' />
                            <CompanyListItem listItemDescription='Facilitate story submissions and discovery' />
                            <CompanyListItem listItemDescription='Enable communication between users' />
                            <CompanyListItem listItemDescription='Analyze usage patterns to improve the platform' />
                        </ul>
                    </div>
                    <CompanyArticleSectionSubtitle text='Communication' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem listItemDescription='Send notifications related to story interactions' />
                            <CompanyListItem listItemDescription='Send newsletters or updates, with opt-out options' />
                            <CompanyListItem listItemDescription='Respond to inquiries and feedback' />
                        </ul>
                    </div>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='How We Share Your Information' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem listItemDescription='Share relevant story pitch information with journalists' />
                            <CompanyListItem listItemDescription='Share profile information (according to your settings) with other users' />
                        </ul>
                    </div>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Your Choices' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem listItemDescription='Update or correct your account information via your account settings' />
                            <CompanyListItem listItemDescription='Opt out of newsletters or promotional emails' />
                            <CompanyListItem listItemDescription='Request the deletion of your account and data' />
                        </ul>
                    </div>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Data Security' />
                    <CompanyArticleParagraph>
                        We use encryption, access controls, and other measures
                        to protect your data. However, no transmission method
                        over the internet or electronic storage is entirely
                        secure.
                    </CompanyArticleParagraph>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text="Children's Privacy" />
                    <CompanyArticleParagraph>
                        Our service is not intended for children under the age
                        of 13.
                    </CompanyArticleParagraph>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Changes to This Policy' />
                    <CompanyArticleParagraph>
                        Poblysh may update this policy from time to time. Any
                        significant changes will be communicated via email or
                        directly on the platform.
                    </CompanyArticleParagraph>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Contact Us' />
                    <CompanyArticleParagraph>
                        For any privacy-related inquiries, please contact us at
                        legal@poblysh.com.
                    </CompanyArticleParagraph>
                </section>
            </article>
        </>
    );
};

export default PrivacyPolicy;
