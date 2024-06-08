import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import {Button} from '@/components/ui/button';

import {Input} from '@/components/ui/input';
import {FormItem} from '@/components/ui/form';
import CompanyLogo from './CompanyLogo';
import {Textarea} from '@/components/ui/textarea';

const CompanyInformationForm = () => {
    return (
        <Card x-chunk='dashboard-04-chunk-1' id='company'>
            <CardHeader>
                <CardTitle>Company information</CardTitle>
                <CardDescription className='text-xs text-slate-300'>
                    100% complete. Last updated 2 days ago.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className='flex flex-col gap-4'>
                    <CompanyLogo />
                    <div className='grid grid-cols-2 gap-4'>
                        <FormItem>
                            <label
                                htmlFor='Name'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Company name
                            </label>
                            <Input
                                placeholder='Enter your name'
                                defaultValue='John Doe'
                            />
                            <div className='flex items-center text-xs text-red-400 space-x-2'>
                                Some error text here
                            </div>{' '}
                        </FormItem>
                        <FormItem>
                            <label
                                htmlFor='Email'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Industry
                            </label>
                            <Input
                                placeholder='Enter your email'
                                defaultValue='johndoe@email.com'
                            />
                        </FormItem>
                        <FormItem>
                            <label
                                htmlFor='Email'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Website
                            </label>
                            <Input
                                placeholder='Enter your website'
                                defaultValue='website.com'
                                disabled
                            />
                        </FormItem>
                        <FormItem>
                            <label
                                htmlFor='Email'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                LinkedIn URL
                            </label>
                            <Input
                                placeholder='Enter your email'
                                defaultValue='johndoe@email.com'
                            />
                        </FormItem>
                        <FormItem>
                            <label
                                htmlFor='Email'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Company Size
                            </label>
                            <Input
                                placeholder='Select company size'
                                defaultValue='11 - 50 employees'
                            />
                        </FormItem>
                        <FormItem>
                            <label
                                htmlFor='Email'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Founding year
                            </label>
                            <Input
                                placeholder='Select company size'
                                defaultValue='2023'
                            />
                        </FormItem>
                        <FormItem>
                            <label
                                htmlFor='Email'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Country
                            </label>
                            <Input
                                placeholder='Select company size'
                                defaultValue='11 - 50 employees'
                            />
                        </FormItem>
                        <FormItem>
                            <label
                                htmlFor='Email'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Head Quarters Address
                            </label>
                            <Input
                                placeholder='Select company size'
                                defaultValue='11 - 50 employees'
                            />
                        </FormItem>
                    </div>
                    <div>
                        <FormItem>
                            <label
                                htmlFor='Email'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Company description
                            </label>
                            <Textarea
                                placeholder='Tell us about your company'
                                defaultValue='Some default value here'
                            />
                        </FormItem>
                        <div className='flex items-center text-xs text-slate-400 space-x-1'>
                            0 of 10,000 characters used
                        </div>
                    </div>
                </form>
            </CardContent>

            <CardFooter className='border-t px-6 py-4'>
                <Button>Save Changes</Button>
            </CardFooter>
        </Card>
    );
};

export default CompanyInformationForm;
