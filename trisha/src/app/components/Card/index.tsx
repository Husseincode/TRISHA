/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image';
import React, { FC } from 'react';

interface CardProps {
  className?: string;
  onClick?: () => void;
  img: any;
  isDisabled: boolean;
  percentOff: number;
  price: number | string;
  outdatedPrice: number | string;
  subImages: {
    img1: any;
    img2: any;
    img3: any;
  };
}

const Card: FC<CardProps> = ({
  className,
  onClick,
  img,
  percentOff,
  price,
  outdatedPrice,
  subImages: { img1, img2, img3 },
}) => {
  return (
    <div
      onClick={onClick}
      className={`lg:min-h-[680px] lg:w-[427px] border-[9px] py-[40px] px-[20px] gap-[20px] border-[#DAE3EB] flex flex-col ${className}`}>
      <div className='w-full lg:h-[446px] flex flex-col gap-[2px]'>
        <button
          type='button'
          className='h-[28px] w-fit text-white py-[5px] px-[10px] gap-[10px] bg-[#008080] font-medium text-[15px] leading-[18px] text-center'>
          OFF {percentOff}%
        </button>
        <Image
          src={img}
          height={416}
          width={367}
          className='lg:h-[416px] lg:w-[367px]'
          alt=''
        />
      </div>
      <div className='lg:h-[34px] w-full flex justify-center items-center'>
        <span className='font-normal lg:text-[20px] lg:leading-[33px] text-center text-[#008080]'>
          Blond Hair wig{' '}
        </span>
      </div>
      <div className='lg:h-[24px] w-full flex items-center justify-center'>
        <span>
          ${' '}
          <span className='font-normal lg:text-[20px] leading-[24px] text-[#212529]'>
            {price}
          </span>{' '}
          <span className='line-through font-[300px] text-[12px] leading-[14px] text-[#535B64]'>
            {outdatedPrice}
          </span>
        </span>
      </div>
      <div className='lg:h-[24px] w-full flex items-center justify-center'>
        <div className='flex gap-[10px]'>
          <div className='h-[36px] w-[36px] cursor-pointer'>
            <Image
              src={img1}
              alt=''
              className='w-[36px] h-[36px] rounded-full border-[1px] border-[#DAE3EB]'
            />
          </div>

          <div className='h-[36px] w-[36px] cursor-pointer'>
            <Image
              src={img2}
              alt=''
              className='w-[36px] h-[36px] rounded-full border-[1px] border-red-600'
            />
          </div>

          <div className='h-[36px] w-[36px] cursor-pointer'>
            <Image
              src={img3}
              alt=''
              className='w-[36px] h-[36px] rounded-full border-[1px] border-zinc-800'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
