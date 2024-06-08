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
import {Textarea} from '@/components/ui/textarea';

const FounderInformationForm = () => {
    return (
        <Card x-chunk='dashboard-04-chunk-1' id='founder'>
            <CardHeader>
                <CardTitle>Founder information</CardTitle>
                <CardDescription className='text-xs text-slate-300'>
                    100% complete. Last updated 2 days ago.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className='flex flex-col gap-4'>
                    <div className='grid grid-cols-2 gap-2'>
                        <FormItem>
                            <label
                                htmlFor='Position'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Position
                            </label>
                            <Input
                                placeholder='Enter your position'
                                defaultValue='CEO'
                            />
                            <div className='flex items-center text-xs text-red-400 space-x-2'>
                                Some error text here
                            </div>
                        </FormItem>
                        <FormItem>
                            <label
                                htmlFor='Profession'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Profession
                            </label>
                            <Input
                                placeholder='Enter your profession'
                                defaultValue='Software engineer'
                            />
                            <div className='flex items-center text-xs text-red-400 space-x-2'>
                                Some error text here
                            </div>
                        </FormItem>
                        <FormItem>
                            <label
                                htmlFor='Bio'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                WhatsApp Number
                            </label>
                            <Input
                                placeholder='Enter your WhatsApp number'
                                defaultValue='+234 123 456 7890'
                            />
                            <div className='flex items-center text-xs text-red-400 space-x-2'>
                                Some error text here
                            </div>
                        </FormItem>
                        <FormItem>
                            <label
                                htmlFor='Bio'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                LinkedIn URL
                            </label>
                            <Input
                                placeholder='Enter your LinkedIn URL'
                                defaultValue='https://linkedin.com/in/username'
                            />
                            <div className='flex items-center text-xs text-red-400 space-x-2'>
                                Some error text here
                            </div>
                        </FormItem>
                    </div>
                    <div>
                        <FormItem>
                            <label
                                htmlFor='Email'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Founder Bio
                            </label>
                            <Textarea
                                placeholder='Enter your founder bio here'
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

export default FounderInformationForm;
