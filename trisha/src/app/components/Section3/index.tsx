/** @format */

import React from 'react';
import './style.css';
import Button from '@/app/components/Button/button';

const SectionComp3 = () => {
  return (
    <div
      className={`min-h-[600px] lg:py-[75px] lg:px-[100px] md:px-[75px] md:py-[120px] py-[30px] px-[50px] bg-[#757272] Comp3BGStyle w-full flex flex-col gap-[20px] items-center justify-center mt-10`}>
      <div className='w-full h-[349px] gap-[26px] flex flex-col items-center justify-center'>
        <span className='font-normal lg:text-[32px] md:text-[30px] text-[24px] lg:leading-[32px] md:leading-[30px] leading-[29px] text-center text-white'>
          Book your first wig
        </span>
        <h2 className='font-inter font-bold lg:leading-[85px] md:leading-[61px] leading-[44px] lg:text-[70px] md:text-[50px] text-[36px] text-center text-[#008080]'>
          Save Up To 40% off
        </h2>
        <span className='font-normal lg:text-[20px] md:text-[15px] text-[12px] lg:leading-[24px] md:leading-[18px] leading-[14px] text-center text-white'>
          Hot deal! Hurry discover your dream hair from our collections. And
          create many unique and innovative style for our hair at unbelievable
          40% off on your first wigs. Quality wigs at affordable price in the
          market
        </span>
        <Button
          text='More Details'
          style={{
            backgroundColor: '#008080',
          }}
          className='lg:min-w-[158px] lg:min-h-[46px] py-[12px] px-[24px] bg-[#008080] text-white'
        />
      </div>
    </div>
  );
};

export default SectionComp3;
