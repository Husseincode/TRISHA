/** @format */

import React from 'react';
import './index.css';
import Image from 'next/image';
import HeroImage from '@/assets/hero-image.png';
import Button from '@/app/components/Button';

const Hero = () => {
  return (
    <div className='bg w-full justify-center items-center flex min-h-[375px] md:min-h-[586px] lg:min-h-[767px]'>
      <div className='container py-[50px] px-[20px] flex flex-col items-center gap-[20px] slide-from-bottom'>
        <Image
          src={HeroImage}
          alt=''
          width={1200}
          height={500}
          className='lg:w-[1200px] lg:h-[500px] w-[311px] min-h-[132px] md:w-[644px] md:h-[274px]'
        />
        <div className='lg:min-h-[137px] md:min-h-[185px] min-h-[270px] w-full lg:p-[30px] gap-[30px] flex flex-col'>
          <h2 className='font-semibold text-[40px] md:text-[42px] lg:text-[45px] lg:leading-[54px] leading-[49px] md:leading-[51px] text-center text-[#212529]'>
            Hair weave, Hair wig, Extensions Market Place Shopify Theme
          </h2>
          <div className='flex justify-center lg:min-h-[53px] min-h-[48px] lg:gap-[12px] gap-[10px]'>
            <Button
              text='View Demo'
              className='py-[12px] px-[24px] lg:min-h-[53px] min-h-[48px]'
            />
            <Button
              text='Purchase theme'
              className='py-[12px] px-[24px] lg:min-h-[53px] min-h-[48px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
