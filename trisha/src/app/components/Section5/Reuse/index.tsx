/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image';
import React, { FC } from 'react';

interface Component1Props {
  heading: string;
  img: any;
  text: string;
}

export const Component1: FC<Component1Props> = ({ heading, img, text }) => {
  return (
    <React.Fragment>
      <div className='flex flex-col gap-[14px]'>
        <Image
          src={img}
          width={84}
          height={84}
          className='md:w-[84px] md:h-[84px] w-[57px] h-[57px]'
          alt=''
        />
        <h2 className='font-bold text-[20px] md:text-[24px] leading-[24px] md:leading-[29px] text-[#FFFFFF]'>
          {heading}
        </h2>
        <span className='text-[#FFFFFF] text-[15px] leading-[18px]'>
          {text}
        </span>
      </div>
    </React.Fragment>
  );
};
