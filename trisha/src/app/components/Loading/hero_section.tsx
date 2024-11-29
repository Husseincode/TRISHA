/** @format */

import React, { FC } from 'react';
import { LoadingComponentProps } from '@/app/components/Loading/types';
import { MobileHeroSectionLines } from './breadcrumbs';

const HeroSection: FC<LoadingComponentProps> = ({
  reverseInitialColor,
  initialColor,
}) => {
  return (
    <div className='min-h-[375px] md:min-h-[586px] lg:min-h-[710px] container py-[50px] px-[20px] flex flex-col items-center gap-[20px]'>
      <svg
        width='1000'
        height='400'
        viewBox='0 0 1000 400'
        fill='none'
        className='hidden lg:inline slide-from-bottom'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='257'
          width='485.83'
          height='271.647'
          rx='12'
          className='transition duration-500'
          fill={reverseInitialColor}
        />
        <rect
          x='46.9636'
          y='125.637'
          width='323.887'
          height='271.647'
          rx='12'
          className='transition duration-500'
          fill={initialColor}
        />
        <rect
          x='595.142'
          y='125.637'
          width='404.858'
          height='271.647'
          rx='12'
          className='transition duration-500'
          fill={initialColor}
        />
        <rect
          y='196.265'
          width='121.457'
          height='203.735'
          rx='12'
          className='transition duration-500'
          fill={reverseInitialColor}
        />
      </svg>

      <svg
        width='600'
        height='255'
        viewBox='0 0 600 255'
        fill='none'
        className='hidden md:inline lg:hidden'
        xmlns='http://www.w3.org/2000/svg'>
        <rect x='134' width='331.492' height='210.744' rx='12' fill='#757272' />
        <rect
          x='16.5746'
          y='96.9421'
          width='248.619'
          height='158.058'
          rx='12'
          fill='#ABA7A7'
        />
        <rect
          x='351.381'
          y='94.8347'
          width='248.619'
          height='158.058'
          rx='12'
          fill='#ABA7A7'
        />
        <rect y='139.091' width='66' height='115.909' rx='12' fill='#757272' />
      </svg>

      <svg
        width='309'
        height='162'
        viewBox='0 0 309 162'
        fill='none'
        className='md:hidden slide-from-bottom'
        xmlns='http://www.w3.org/2000/svg'>
        <rect x='69' width='170.133' height='133.516' rx='12' fill='#757272' />
        <rect
          x='9.03601'
          y='61.4172'
          width='127.6'
          height='100.137'
          rx='12'
          fill='#ABA7A7'
        />
        <rect
          x='180.871'
          y='60.0821'
          width='127.6'
          height='100.137'
          rx='12'
          fill='#ABA7A7'
        />
        <rect
          x='0.529358'
          y='88.1204'
          width='51.04'
          height='73.4337'
          rx='12'
          fill='#757272'
        />
      </svg>

      <svg
        width='1400'
        className='w-full lg:inline hidden slide-from-right'
        height='30'
        viewBox='0 0 1400 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          width='1400'
          height='30'
          className='transition duration-500'
          fill={initialColor}
        />
      </svg>

      <div className='flex flex-col gap-[30px] justify-center items-center text-center min-h-[111px] lg:hidden slide-from-bottom'>
        {Array.from({ length: 3 }).map((__, idx: number) => (
          <MobileHeroSectionLines
            key={idx}
            initialColor={initialColor}
            className={`h-[17px] md:h-[36px] w-[290px] transition duration-500 ${
              idx === 2 && 'w-[255px] md:hidden'
            } ${idx === 0 && 'md:w-[650px]'} ${idx === 1 && 'md:w-[600px]'}`}
          />
        ))}
      </div>

      <svg
        width='301'
        height='51'
        viewBox='0 0 301 51'
        fill='none'
        className='slide-from-bottom'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='0.5'
          y='0.554047'
          width='118'
          height='50'
          rx='12'
          className='transition duration-500'
          fill={initialColor}
        />
        <rect
          x='20'
          y='15'
          width='80'
          height='20'
          rx='10'
          className='transition duration-500'
          fill={reverseInitialColor}
        />
        <rect
          x='124.259'
          y='0.554047'
          width='176.241'
          height='50'
          rx='12'
          className='transition duration-500'
          fill={initialColor}
        />
        <rect
          x='147'
          y='15'
          width='130'
          height='20'
          rx='10'
          className='transition duration-500'
          fill={reverseInitialColor}
        />
      </svg>
    </div>
  );
};

export default HeroSection;
