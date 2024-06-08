'use client';

import Image, {ImageProps} from 'next/image';
import {useEffect, useState} from 'react';

interface Props extends Omit<ImageProps, 'src'> {
    darkSrc?: string;
    lightSrc: string;
}

const ThemeBasedImage = (props: Props) => {
    const [imgUrl, setImgUrl] = useState<string>('');
    const {lightSrc, width, height, alt, ...leftProps} = props;

    return (
        <>
            {
                <Image
                    alt={alt}
                    src={imgUrl}
                    width={width}
                    height={height}
                    {...leftProps}
                />
            }
        </>
    );
};

export default ThemeBasedImage;
