/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image, { StaticImageData } from 'next/image';
import React, { LegacyRef } from 'react';
import giftIcon from '@/app/components/Section11/ReUse/svgs/gift.svg';
import userIcon from '@/app/components/Section11/ReUse/svgs/user.svg';
import commentIcon from '@/app/components/Section11/ReUse/svgs/comment.svg';

interface ReUseProps {
  img: StaticImageData;
  ramM: string;
  date: string;
  noOfComments: number;
  heading: string;
  description: string;
  onClick: () => void;
  ref?: LegacyRef<HTMLDivElement>;
  className?: string;
  style?: React.CSSProperties;
}

const ReUse: React.FC<ReUseProps> = ({
  img,
  ramM,
  date,
  noOfComments,
  heading,
  description,
  onClick,
  ref,
  className,
}) => {
  return (
    <div
      ref={ref}
      className={`min-h-[604px] flex flex-col pb-[20px] rounded-xl gap-[29px] lg:w-1/3 w-full ${className}`}>
      <Image
        src={img}
        alt=''
        width={428}
        height={300}
        style={{ objectFit: 'cover' }}
        className='w-full lg:h-[300px]'
      />
      <div className='lg:min-h-[275px] w-full flex flex-col justify-center items-center gap-[19px]'>
        <div className='flex flex-col justify-center items-center gap-[19px]'>
          <div className='flex flex-col justify-center items-center flex-wrap w-full gap-[10px]'>
            <div className='flex gap-[20px]'>
              <span className='flex gap-1'>
                <Image
                  src={userIcon}
                  width={24}
                  height={24}
                  className='w-[24px] h-[24px]'
                  alt=''
                />
                <span className='text-[18px] leading-[22px] text-[#000000]'>
                  {ramM}
                </span>
              </span>

              <span className='flex gap-1'>
                <Image
                  src={giftIcon}
                  width={24}
                  height={24}
                  className='w-[24px] h-[24px]'
                  alt=''
                />
                <span className='text-[18px] leading-[22px] text-[#000000]'>
                  {date}
                </span>
              </span>
            </div>

            <span className='flex gap-1'>
              <Image
                src={commentIcon}
                width={24}
                height={24}
                className='w-[24px] h-[24px]'
                alt=''
              />
              <span className='text-[18px] leading-[22px] text-[#000000]'>
                {noOfComments > 1 ? `${noOfComments} Comments` : 'Comment'}
              </span>
            </span>
          </div>
          <h2 className='font-extrabold text-[24px] px-[10px] text-center leading-[29px] text-[#008080]'>
            {heading}
          </h2>
          <span className='font-normal text-[18px] leading-[22px] text-center p-[10px]'>
            {description}
          </span>
        </div>
        <button
          onClick={onClick}
          type='button'
          className='py-[12px] px-[24px] h-[46px] w-[142px] bg-[#008080] hover:bg-[#174e4e] transition-all duration-500 text-[#FFFFFF] font-semibold text-[18px] leading-[22px]'>
          Read More
        </button>
      </div>
    </div>
  );
};

export default ReUse;
