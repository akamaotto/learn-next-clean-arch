import Link from 'next/link';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import DashboardSingleTechBlogger from './DashboardSingleTechBlogger';

const bloggers = [
    {
        avatarUrl: 'https://avatars.githubusercontent.com/u/1049969?v=4',
        bloggerName: 'Paul Otto',
        blogName: 'Tech Cabal',
        linkedInURL: '#',
    },
    {
        avatarUrl: 'https://avatars.githubusercontent.com/u/1049969?v=4',
        bloggerName: 'Claudia Dada',
        blogName: 'This Day in Tech',
        linkedInURL: '#',
    },
    {
        avatarUrl: 'https://avatars.githubusercontent.com/u/1049969?v=4',
        bloggerName: 'Mince Obi',
        blogName: 'Benjamin Dada Blog',
        linkedInURL: '#',
    },
];

const DashboardTopTechBloggers = () => {
    return (
        <Card x-chunk='dashboard-01-chunk-5'>
            <CardHeader>
                <CardTitle>Top Tech Bloggers</CardTitle>
            </CardHeader>
            {bloggers.map((blogger) => (
                <DashboardSingleTechBlogger
                    key={blogger.bloggerName}
                    bloggerAvatarURL={blogger.avatarUrl}
                    bloggerName={blogger.bloggerName}
                    blogName={blogger.blogName}
                    linkedInURL={blogger.linkedInURL}
                />
            ))}
        </Card>
    );
};

export default DashboardTopTechBloggers;
