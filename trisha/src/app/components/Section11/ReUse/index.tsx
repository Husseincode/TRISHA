/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image';
import React from 'react';

interface ReUseProps {
  img: any;
}

const ReUse: React.FC<ReUseProps> = ({ img }) => {
  return (
    <div className='min-h-[604px] flex flex-col gap-[29px] w-[428px]'>
      <Image
        src={img}
        alt=''
        width={428}
        height={300}
        className='lg:w-[428px] lg:h-[300px]'
      />
      <div className='lg:h-[275px] lg:w-[428px] flex flex-col gap-[19px]'>
        <div></div>
        <button type='button'>Read More</button>
      </div>
    </div>
  );
};

export default ReUse;
