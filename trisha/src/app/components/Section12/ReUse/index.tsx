/** @format */
import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

interface ReUseProps {
  heading: string;
  text: string;
  image: StaticImageData;
}

const ReUse: FC<ReUseProps> = ({ heading, text, image }) => {
  return (
    <div className='lg:w-1/3 w-full border-[1px] py-[28px] px-[39px] border-[#00000080] h-[156px] justify-center items-center flex'>
      <div className='w-full h-[100px] lg:gap-[12px] gap-[12px] md:gap-[50px] flex items-center'>
        <div className='w-[67px] flex justify-center items-center h-[100px] py-[31px] px-[14px] bg-[#008080]'>
          <Image
            src={image}
            alt=''
            width={39}
            height={38}
            className='w-[39px] h-[38px]'
          />
        </div>
        <div className='flex flex-col items-center justify-center gap-[7px] h-[70px]'>
          <h2 className='font-bold text-[22px] leading-[26px] text-[#008080] text-center'>
            {heading}
          </h2>
          <span className='font-normal text-base leading-[18px] text-[#212529] text-center'>
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReUse;
