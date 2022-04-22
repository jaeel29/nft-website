/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { ImageStyles } from './ImageTesting.styled';

const ImageTesting = () => {
  return (
    <ImageStyles>
      <div className='imageContainer'>
        <Image
          src={'/images/woman-3x.png'}
          alt='woman'
          layout='fill'
          objectFit='contain'
          quality={100}
        />
      </div>
    </ImageStyles>
  );
};

export default ImageTesting;
