/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image';
import React, { FC, LegacyRef } from 'react';

interface ReUseProps {
  image: any;
  name: string;
  description: string;
  ref: LegacyRef<HTMLDivElement> | undefined;
  className?: string;
  style?: React.CSSProperties;
}

const ReUse: FC<ReUseProps> = ({
  image,
  name,
  description,
  ref,
  className,
}) => {
  return (
    <div ref={ref} className={`flex flex-col gap-[15px] ${className}`}>
      <div className='flex flex-col gap-[20px]'>
        <Image
          alt=''
          src={image}
          width={140}
          height={140}
          style={{ filter: 'brightness(70%)' }}
          className='w-[140px] h-[140px] rounded-full'
        />
        <h2 className='font-extrabold text-[20px] leading-[24px] text-[#008080]'>
          {name}
        </h2>
      </div>
      <span className='font-normal text-[#FFFFFF] text-base leading-[20px]'>
        {description}
      </span>
    </div>
  );
};

export default ReUse;
