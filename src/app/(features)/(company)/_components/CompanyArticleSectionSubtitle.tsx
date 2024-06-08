import React from 'react';

interface Props {
    text: string;
}
const CompanyArticleSectionSubtitle = ({text}: Props) => {
    return <h4 className='text-md font-regular pt-4'>{text}</h4>;
};

export default CompanyArticleSectionSubtitle;
