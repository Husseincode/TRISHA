/** @format */

import React, { FC } from 'react';
import { LoadingComponentProps } from '@/app/components/Loading/types';

const Section9: FC<LoadingComponentProps> = ({ initialColor }) => {
  return (
    <div className='min-h-[803px] py-[100px] px-[90px] gap-[20px] flex md:items-center md:justify-center bg-[#757272] w-full'>
      <div className='container flex flex-col gap-[20px] slide-from-bottom'>
        <svg
          width='510'
          height='130'
          className='w-[250px] lg:w-[510px]'
          viewBox='0 0 510 130'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            width='400'
            height='30'
            fill={initialColor}
            className='transition duration-500'
          />
          <rect
            width='500'
            height='70'
            transform='translate(10 60)'
            fill={initialColor}
            className='transition duration-500'
          />
        </svg>

        <div className='flex md:flex-row flex-col gap-[60px]'>
          <svg
            width='500'
            height='410'
            viewBox='0 0 500 410'
            fill='none'
            className='w-[250px] md:w-[500px]'
            xmlns='http://www.w3.org/2000/svg'>
            <circle cx='114' cy='70' r='70' fill='#ABA7A7' />
            <rect
              width='300'
              height='25.7936'
              transform='translate(0 174.762)'
              fill='#ABA7A7'
            />
            <rect
              width='500'
              height='15.4762'
              transform='translate(0 246.984)'
              fill='#ABA7A7'
            />
            <rect
              width='500'
              height='15.4762'
              transform='translate(0 278.254)'
              fill='#ABA7A7'
            />
            <rect
              width='250'
              height='15.4762'
              transform='translate(0 309.524)'
              fill='#ABA7A7'
            />
            <circle cx='10' cy='399.487' r='10' fill='#ABA7A7' />
            <circle cx='50' cy='399.487' r='10' fill='#ABA7A7' />
          </svg>

          <svg
            width='500'
            height='410'
            viewBox='0 0 500 410'
            fill='none'
            className='w-[250px] md:w-[500px]'
            xmlns='http://www.w3.org/2000/svg'>
            <circle cx='114' cy='70' r='70' fill='#ABA7A7' />
            <rect
              width='300'
              height='25'
              transform='translate(0 180)'
              fill='#ABA7A7'
            />
            <rect
              width='500'
              height='15'
              transform='translate(0 250)'
              fill='#ABA7A7'
            />
            <rect
              width='500'
              height='15'
              transform='translate(0 280)'
              fill='#ABA7A7'
            />
            <rect
              width='250'
              height='15'
              transform='translate(0 310)'
              fill='#ABA7A7'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Section9;
