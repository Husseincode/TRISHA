/** @format */

import React from 'react';
import {
  FooterComponent1,
  FooterComponent2,
  FooterComponent3,
  FooterEllipses,
} from '@/app/components/Loading/breadcrumbs';

const Footer = () => {
  return (
    <div className='flex justify-center w-full min-h-[800px] bg-[#757272]'>
      <div className='container flex flex-col slide-from-bottom'>
        <div className='flex justify-between items-center py-[70px] px-[30px] border-[1px] border-[#ABA7A7]'>
          {Array.from({ length: 2 }).map((__, idx: number) => (
            <FooterComponent1 key={idx} />
          ))}
          <FooterEllipses />
        </div>

        <div className='grid grid-cols-4 grid-rows-1 min-h-[365px]'>
          <div className='h-[inherit] border-[1px] border-[#ABA7A7] px-[30px] flex items-center'>
            <svg
              width='200'
              height='155'
              viewBox='0 0 200 155'
              fill='none'
              className='flex items-center'
              xmlns='http://www.w3.org/2000/svg'>
              <rect width='140' height='30' fill='#ABA7A7' />
              <rect
                width='70'
                height='5'
                transform='translate(0 40)'
                fill='#ABA7A7'
              />
              <rect
                width='180'
                height='15'
                transform='translate(0 80)'
                fill='#ABA7A7'
              />
              <rect
                width='200'
                height='15'
                transform='translate(0 110)'
                fill='#ABA7A7'
              />
              <rect
                width='160'
                height='15'
                transform='translate(0 140)'
                fill='#ABA7A7'
              />
            </svg>
          </div>

          {Array.from({ length: 3 }).map((__, idx: number) => (
            <div
              key={idx}
              className='h-[365px] border-[1px] border-[#ABA7A7] flex items-center'>
              <FooterComponent2 />
            </div>
          ))}
        </div>
        <div className='flex justify-between items-center py-[70px] px-[30px] border-[1px] border-[#ABA7A7]'>
          {Array.from({ length: 3 }).map((__, idx: number) => (
            <FooterComponent1 key={idx} />
          ))}
        </div>
        <div className='flex justify-between items-center py-[40px]'>
          <div className='flex gap-[20px]'>
            {Array.from({ length: 6 }).map((__, idx: number) => (
              <FooterComponent3 key={idx} />
            ))}
          </div>

          <svg
            width='430'
            height='18'
            viewBox='0 0 430 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect width='430' height='18' fill='#ABA7A7' />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
