/** @format */

import React, { FC } from 'react';
import { LoadingComponentProps } from '@/app/components/Loading/types';

const Section4: FC<LoadingComponentProps> = ({
  reverseInitialColor,
  initialColor,
}) => {
  return (
    <div className='flex flex-col min-h-[435px] pt-[100px] px-[50px] gap-[50px] slide-from-top'>
      <svg
        width='650'
        height='120'
        viewBox='0 0 650 120'
        fill='none'
        className='lg:w-[intial] w-full'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          width='650'
          height='120'
          className='transition duration-500'
          fill={reverseInitialColor}
        />
      </svg>
      <div className='flex'>
        <svg
          width='580'
          height='65'
          viewBox='0 0 580 65'
          fill='none'
          className='lg:w-[intial] w-full'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            width='180'
            height='65'
            transform='translate(0.512512)'
            className='transition duration-500'
            fill={reverseInitialColor}
          />
          <rect
            width='130'
            height='25'
            transform='translate(26 22)'
            className='transition duration-500'
            fill={initialColor}
          />
          <rect
            width='130'
            height='25'
            transform='translate(209.14 17.1904)'
            className='transition duration-500'
            fill={reverseInitialColor}
          />
          <rect
            width='190'
            height='25'
            transform='translate(389.488 17.1904)'
            className='transition duration-500'
            fill={reverseInitialColor}
          />
        </svg>
      </div>
    </div>
  );
};

export default Section4;
