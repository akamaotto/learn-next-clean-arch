import { Search } from 'lucide-react';
import React from 'react';

import { Input } from '@/components/ui/input';

interface SearchBoxProps {
    lgWidth?: string;
    mdWidth?: string;
    placeholder?: string;
}

const SearchBox = ({lgWidth, mdWidth, placeholder}: SearchBoxProps) => {
    return (
        <div className='relative ml-auto flex-1 md:grow-0'>
            <Search className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
            <Input
                type='search'
                placeholder={placeholder}
                className={`w-full rounded-lg bg-background pl-8 md:w-[${mdWidth}] lg:w-[${lgWidth}]`}
            />
        </div>
    );
};

export default SearchBox;
