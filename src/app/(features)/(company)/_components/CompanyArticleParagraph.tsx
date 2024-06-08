import React from 'react';

interface Props {
    children: string;
}
const CompanyArticleParagraph = ({children}: Props) => {
    return <p className='pt-4 text-slate-500 font-light text-md'>{children}</p>;
};

export default CompanyArticleParagraph;
