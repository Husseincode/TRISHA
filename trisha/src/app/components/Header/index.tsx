/** @format */

import Image from 'next/image';
import React from 'react';
import TrishaLogo from '@/assets/logo.png';
import { NavbarData } from './NavbarData';
import Link from 'next/link';
import BarIcon from '@/app/components/Header/svgs/bar.svg';

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center py-[23px] px-[16px] lg:py-[16px] lg:px-[69px] min-h-[102px] slide-from-top bg-[#f8f9fa]'>
      {/**Image or Logo section */}
      <div className='h-[50px] min-w-[175px] lg:w-[217px] flex items-end'>
        <Image
          src={TrishaLogo}
          alt='Trisha'
          width={169}
          height={50}
          onClick={() => {
            window.location.href = '/';
          }}
          className='w-[169px] h-[50px]'
        />
      </div>

      {/**Navigation For Larger Devices */}
      <div className={`hidden lg:flex gap-[40px]`}>
        {NavbarData.map((item, idx: number) => (
          <Link
            href={item.url}
            title={item.nav}
            className='lg:text-[20px] font-normal leading-[24px]'
            key={idx}>
            {item.nav}
          </Link>
        ))}
      </div>

      <Image
        src={BarIcon}
        className={`w-[44px] h-[44px] lg:hidden rounded-[12px] transition duration-500`}
        alt=''
        width={44}
        height={44}
      />
    </header>
  );
};

export default Header;
