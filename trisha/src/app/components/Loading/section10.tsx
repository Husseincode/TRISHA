/** @format */

import React, { FC } from 'react';
import { BreadCrumb4 } from '@/app/components/Loading/breadcrumbs';
import { LoadingComponentProps } from '@/app/components/Loading/types';

const Section10: FC<LoadingComponentProps> = ({
  initialColor,
  reverseInitialColor,
}) => {
  return (
    <div className='py-[100px] px-[50px] gap-[52px] w-full flex items-center justify-center'>
      <div className='container flex flex-col gap-[52px] items-center justify-center fade-in'>
        <svg
          width='400'
          height='75'
          viewBox='0 0 400 75'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect width='400' height='75' fill='#757272' />
        </svg>
        <div className='flex flex-col md:grid lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-4 gap-[10px]'>
          {Array.from({ length: 8 }).map((__, idx: number) => (
            <BreadCrumb4
              key={idx}
              initialColor={initialColor}
              reverseInitialColor={reverseInitialColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section10;
