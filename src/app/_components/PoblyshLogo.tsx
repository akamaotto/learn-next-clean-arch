import Image from 'next/image';
import React from 'react';

const PoblyshLogo = () => {
    return (
        <Image
            src='/images/brand/logo-word.png'
            width={90}
            height={8}
            alt='Poblysh'
        />
        // <p className='font-medium text-lg text-slate-600'>Poblysh</p>
    );
};

export default PoblyshLogo;
