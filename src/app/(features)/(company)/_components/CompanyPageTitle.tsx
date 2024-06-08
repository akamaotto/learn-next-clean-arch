import React from 'react';

interface Props {
    text: string;
}
const CompanyPageTitle = ({text}: Props) => {
    return <h1 className='text-4xl font-bold'>{text}</h1>;
};

export default CompanyPageTitle;
