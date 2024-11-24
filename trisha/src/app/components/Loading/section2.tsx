/** @format */

import React, { FC } from 'react';
import { BreadCrumb } from './breadcrumbs';
import { LoadingComponentProps } from '@/app/components/Loading/types';

const Section2: FC<LoadingComponentProps> = ({
  reverseInitialColor,
  initialColor,
}) => {
  return (
    <div className='min-h-[800px] py-[50px] md:py-[100px] gap-[40px] flex flex-col lg:flex-row'>
      <BreadCrumb
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      />
      <div
        className={`lg:w-1/3 w-[300px] border-2 md:w-[400px] min-h-[599px] slide-from-bottom bg-[#757272]`}>
        <div className='p-10 flex flex-col gap-[50px] items-center justify-center'>
          <svg
            width='200'
            height='72'
            viewBox='0 0 200 72'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              y='0.0974121'
              width='200'
              height='71'
              rx='12'
              fill={initialColor}
              className='transition duration-500'
            />
          </svg>
          <svg
            width='350'
            className='lg:w-[300px] w-full'
            height='99'
            viewBox='0 0 350 99'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              y='0.908569'
              width='350'
              height='22'
              rx='11'
              fill={initialColor}
              className='transition duration-500'
            />
            <rect
              y='38.7462'
              width='350'
              height='22'
              rx='11'
              fill={initialColor}
              className='transition duration-500'
            />
            <rect
              x='35'
              y='76.584'
              width='280'
              height='22'
              rx='11'
              fill={initialColor}
              className='transition duration-500'
            />
          </svg>
          <svg
            width='250'
            height='71'
            viewBox='0 0 250 71'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              y='0.259766'
              width='250'
              height='70'
              rx='12'
              fill={initialColor}
              className='transition duration-500'
            />
            <rect
              x='40'
              y='22.03'
              width='170'
              height='25'
              rx='12'
              fill={reverseInitialColor}
              className='transition duration-500'
            />
          </svg>
        </div>
      </div>
      <BreadCrumb
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      />
    </div>
  );
};

export default Section2;
