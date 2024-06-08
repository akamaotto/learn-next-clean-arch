import React from 'react';

interface Props {
    listItemTitle?: string;
    listItemDescription: string;
}
const CompanyListItem = ({listItemTitle, listItemDescription}: Props) => {
    const listItemTitleText = listItemTitle ? `${listItemTitle}: ` : '';
    return (
        <li>
            <span>
                <strong>{listItemTitleText}</strong>
            </span>
            <span>{listItemDescription}</span>
        </li>
    );
};

export default CompanyListItem;
