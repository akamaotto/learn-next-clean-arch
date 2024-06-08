import React from 'react';

import CompanyArticleParagraph from '../_components/CompanyArticleParagraph';
import CompanyArticleSectionSubtitle from '../_components/CompanyArticleSectionSubtitle';
import CompanyArticleSectionTitle from '../_components/CompanyArticleSectionTitle';
import CompanyListItem from '../_components/CompanyListItem';
import CompanyPageSubTitle from '../_components/CompanyPageSubTitle';
import CompanyPageTitle from '../_components/CompanyPageTitle';

export const metadata = {
    title: 'Terms of Use - Poblysh',
    description:
        'Read the terms of use for the Poblysh platform. Understand the rules and guidelines for using our service.',
};

const TermsOfUse = () => {
    return (
        <>
            <CompanyPageTitle text='Terms of Use' />

            <article className='pt-4'>
                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Acceptance of Terms' />
                    <CompanyArticleParagraph>
                        By accessing or using the Poblysh platform
                        (&quot;Service&quot;), you agree to be bound by these
                        Terms of Use (&quot;Terms&quot;). If you do not agree to
                        these Terms, you may not use the Service.
                    </CompanyArticleParagraph>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='User Accounts' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem listItemDescription='You must create an account to access certain features of the Service. You are responsible for maintaining the confidentiality of your account information and agree to accept responsibility for all activities that occur under your account.' />
                            <CompanyListItem listItemDescription='You must provide accurate and complete information when creating an account and keep it updated.' />
                            <CompanyListItem listItemDescription='Poblysh reserves the right to suspend or terminate your account if you violate these Terms.' />
                        </ul>
                    </div>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='User Content' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem listItemDescription="You retain ownership of any content you submit to the Service ('User Content'). By submitting User Content, you grant Poblysh a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, distribute, and display the User Content in connection with the Service." />
                            <CompanyListItem listItemDescription='You are solely responsible for your User Content and its accuracy, legality, and appropriateness.' />
                            <CompanyListItem listItemDescription='Poblysh reserves the right to remove or modify User Content that violates these Terms or is deemed inappropriate.' />
                        </ul>
                    </div>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Prohibited Conduct' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem listItemDescription='Violate any applicable laws or regulations.' />
                            <CompanyListItem listItemDescription='Infringe the intellectual property rights of others.' />
                            <CompanyListItem listItemDescription='Post or transmit any harmful, offensive, or discriminatory content.' />
                            <CompanyListItem listItemDescription='Impersonate another person or entity.' />
                            <CompanyListItem listItemDescription='Engage in any activity that disrupts or interferes with the proper functioning of the Service.' />
                        </ul>
                    </div>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Intellectual Property' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem listItemDescription='The Service and its original content, features, and functionality are owned by Poblysh and are protected by intellectual property laws.' />
                            <CompanyListItem listItemDescription='You may not use the Poblysh name, logo, or other trademarks without express written permission.' />
                        </ul>
                    </div>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Disclaimer of Warranties' />
                    <div className='pt-4 text-slate-500 font-light text-md'>
                        <ul className='list-disc ml-8 space-y-2'>
                            <CompanyListItem listItemDescription='The Service is provided "as is" without warranties of any kind, either express or implied.' />
                            <CompanyListItem listItemDescription='Poblysh does not warrant that the Service will be uninterrupted, error-free, or secure.' />
                        </ul>
                    </div>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Limitation of Liability' />
                    <CompanyArticleParagraph>
                        Poblysh shall not be liable for any indirect,
                        incidental, special, consequential, or punitive damages
                        arising out of or in connection with the use of the
                        Service.
                    </CompanyArticleParagraph>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Indemnification' />
                    <CompanyArticleParagraph>
                        You agree to indemnify and hold Poblysh harmless from
                        any claims, damages, liabilities, and expenses arising
                        out of or in connection with your use of the Service or
                        your violation of these Terms.
                    </CompanyArticleParagraph>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Governing Law' />
                    <CompanyArticleParagraph>
                        These Terms shall be governed by and construed in
                        accordance with the laws of Nigeria.
                    </CompanyArticleParagraph>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Changes to Terms' />
                    <CompanyArticleParagraph>
                        Poblysh reserves the right to modify these Terms at any
                        time. Your continued use of the Service following any
                        changes constitutes your acceptance of the modified
                        Terms.
                    </CompanyArticleParagraph>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Termination' />
                    <CompanyArticleParagraph>
                        Poblysh may terminate or suspend your access to the
                        Service at any time for any reason, including your
                        violation of these Terms.
                    </CompanyArticleParagraph>
                </section>

                <section className='pt-4'>
                    <CompanyArticleSectionTitle text='Contact Us' />
                    <CompanyArticleParagraph>
                        If you have any questions about these Terms, please
                        contact us at legal@poblysh.com.
                    </CompanyArticleParagraph>
                </section>
            </article>
        </>
    );
};

export default TermsOfUse;
