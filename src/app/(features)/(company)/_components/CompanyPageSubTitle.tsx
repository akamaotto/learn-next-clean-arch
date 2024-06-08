import React from 'react';

interface Props {
    text: string;
}
const CompanyPageSubTitle = ({text}: Props) => {
    return <h3 className='text-xl font-regular pt-4 text-slate-500'>{text}</h3>;
};

export default CompanyPageSubTitle;
