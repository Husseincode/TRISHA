/** @format */

import React, { FC } from 'react';

interface NavbarProps {
  initialColor: string;
}

const Navbar: FC<NavbarProps> = ({ initialColor }) => {
  return (
    <nav className='w-full flex justify-between items-center py-[23px] px-[16px] lg:py-[16px] lg:px-[69px] min-h-[102px] slide-from-top bg-[#E3E9F1]'>
      <svg
        width='217'
        className='lg:w-[217px] w-[175px]'
        height='70'
        viewBox='0 0 217 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle
          cx='35'
          cy='35'
          r='35'
          className='transition duration-500 slide-from-left'
          fill={initialColor}
        />
        <rect
          x='67'
          y='53'
          width='150'
          height='15'
          rx='7.5'
          className='transition duration-500 slide-from-bottom'
          fill={initialColor}
        />
      </svg>
      <svg
        width='576'
        height='26'
        viewBox='0 0 576 26'
        fill='none'
        className='hidden lg:inline'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          y='0.75'
          width='70'
          height='25'
          rx='12'
          className='transition duration-500'
          fill={initialColor}
        />
        <rect
          x='132'
          y='0.75'
          width='90'
          height='25'
          rx='12'
          className='transition duration-500'
          fill={initialColor}
        />
        <rect
          x='254'
          y='0.25'
          width='200'
          height='25'
          rx='12'
          className='transition duration-500'
          fill={initialColor}
        />
        <rect
          x='486'
          y='0.75'
          width='90'
          height='25'
          rx='12'
          className='transition duration-500'
          fill={initialColor}
        />
      </svg>
      <svg
        className='lg:hidden w-[70px] h-[70px]'
        width='70'
        height='70'
        viewBox='0 0 70 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          width='70'
          height='70'
          rx='12'
          className='transition duration-500'
          fill={initialColor}
        />
      </svg>
    </nav>
  );
};

export default Navbar;
