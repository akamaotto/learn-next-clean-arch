import React from 'react';

interface Props {
    text: string;
}
const CompanyArticleSectionTitle = ({text}: Props) => {
    return <h3 className='text-xl font-regular pt-4'>{text} </h3>;
};

export default CompanyArticleSectionTitle;
