/** @format */

import React, { FC } from 'react';
import { LoadingComponentProps } from '@/app/components/Loading/types';
import {
  BreadCrumb5,
  StraightLine,
} from '@/app/components/Loading/breadcrumbs';

const Section6: FC<LoadingComponentProps> = ({}) => {
  return (
    <div className='min-h-[827px] bg-[#757272] py-[100px] px-[30px] md:px-[50px] w-full flex justify-center gap-[100px] items-center'>
      <div className='container flex md:justify-between lg:flex-row flex-col slide-from-right md:items-center gap-[20px]'>
        <div className='flex flex-col min-h-[376px] gap-[40px]'>
          {Array.from({ length: 5 }).map((__, idx: number) => (
            <StraightLine
              key={idx}
              width='333'
              height='23'
              className='md:w-[initial] w-full'
            />
          ))}
          <svg
            width='200'
            height='66'
            viewBox='0 0 200 66'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              width='200'
              height='65'
              transform='translate(0 0.5)'
              fill='#ABA7A7'
            />
            <rect
              width='150'
              height='20'
              transform='translate(25 22.5)'
              fill='#757272'
            />
          </svg>
        </div>

        <div className='w-1/2 flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-[20px]'>
          {Array.from({ length: 4 }).map((__, idx) => (
            <BreadCrumb5 key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
