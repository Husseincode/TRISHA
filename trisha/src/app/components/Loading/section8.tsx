/** @format */

import React, { FC } from 'react';
import { BreadCrumb4 } from '@/app/components/Loading/breadcrumbs';
import { LoadingComponentProps } from '@/app/components/Loading/types';

const Section8: FC<LoadingComponentProps> = ({
  initialColor,
  reverseInitialColor,
}) => {
  return (
    <div className='h-[1000px] md:py-[100px] md:px-[50px] py-[70px] px-[28px] flex items-center justify-center'>
      <div className='container flex items-center gap-[33px] md:gap-[79px] lg:gap-[10px]'>
        <svg
          width='351'
          height='800'
          viewBox='0 0 351 800'
          fill='none'
          className=''
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            width='350'
            height='800'
            transform='translate(0.5)'
            className='transition duration-500'
            fill={reverseInitialColor}
          />
          <rect
            width='150'
            height='35'
            transform='translate(100.5 510)'
            className='transition duration-500'
            fill={initialColor}
          />
          <rect
            width='250'
            height='35'
            transform='translate(50.5 560)'
            className='transition duration-500'
            fill={initialColor}
          />
          <rect
            width='220'
            height='70'
            transform='translate(65.5 661)'
            className='transition duration-500'
            fill={initialColor}
          />
        </svg>

        <div className='flex flex-col'>
          <svg
            width='371'
            height='50'
            viewBox='0 0 371 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              width='370'
              height='50'
              transform='translate(0.5)'
              fill='#ABA7A7'
            />
          </svg>
          <div className='flex gap-[10px] lg:flex-row flex-col'>
            {Array.from({ length: 3 }).map((__, idx: number) => {
              return (
                <BreadCrumb4
                  key={idx}
                  initialColor={initialColor}
                  reverseInitialColor={reverseInitialColor}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
