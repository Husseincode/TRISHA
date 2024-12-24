/** @format */

'use client';

import React, { FC } from 'react';
import { NavbarData } from '../Header/data/NavbarData';
import TrishaLogo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

interface SideBarProps {
  isOpened: boolean;
  setIsOpened: (type: boolean) => void;
}

const SideBar: FC<SideBarProps> = ({ isOpened, setIsOpened }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-[100%] transition-all z-50 duration-500 bg-white text-zinc-800 flex flex-col lg:hidden gap-[20px] ${
        isOpened ? 'w-full visible' : 'w-0 invisible'
      }`}>
      <div className='min-h-[40px] bg-black flex items-center justify-between py-[20px] px-[20px]'>
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
        <button
          type='button'
          onClick={() => {
            setIsOpened(false);
          }}>
          {''}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <line x1='18' y1='6' x2='6' y2='18'></line>
            <line x1='6' y1='6' x2='18' y2='18'></line>
          </svg>
        </button>
      </div>

      {/**navbar options */}
      <div className='w-full py-[30px] px-[20px] flex flex-col gap-[20px]'>
        {NavbarData.map((item, idx: number) => (
          <Link
            href={'#'}
            className={`text-[25px] ${
              isOpened ? 'slide-from-right' : ''
            } font-medium`}
            key={idx}>
            {item.nav}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
