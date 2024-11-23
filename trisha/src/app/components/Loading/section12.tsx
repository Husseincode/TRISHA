/** @format */

import React, { FC } from 'react';
import { LoadingComponentProps } from '@/app/components/Loading/types';
import { Card } from './breadcrumbs';

const Section12: FC<LoadingComponentProps> = ({
  initialColor,
  reverseInitialColor,
}) => {
  return (
    <div className='w-full min-h-[1000px] py-[100px] px-[70px] flex justify-center items-center'>
      <div className='container flex flex-col items-center justify-center gap-[58px]'>
        <svg
          width='370'
          height='80'
          viewBox='0 0 370 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect width='370' height='80' fill='#757272' />
        </svg>
        <div className='flex lg:flex-row flex-col gap-[30px]'>
          {Array.from({ length: 3 }).map((__, idx: number) => (
            <Card
              initialColor={initialColor}
              reverseInitialColor={reverseInitialColor}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section12;
