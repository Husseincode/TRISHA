/** @format */

import Image from 'next/image';
import React, { Fragment, useRef, useState } from 'react';
import TrishaLogo from '@/assets/logo.png';
import { NavbarData } from '@/app/components/Header/data/NavbarData';
import Link from 'next/link';
import BarIcon from '@/app/components/Header/svgs/bar.svg';
import SideBar from '../Sidebar';
import { usePageContext } from '@/app/context/pageContext';

const Header = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { isScrolled } = usePageContext();
  const ref = useRef<HTMLHeadingElement>(null);

  return (
    <Fragment>
      <header
        ref={ref}
        className={`w-full fixed top-0 z-30 transition-all duration-500 flex justify-between items-center py-[23px] px-[16px] lg:py-[16px] lg:px-[69px] min-h-[102px] slide-from-top ${
          isScrolled ? 'bg-black text-[#586069]' : 'bg-[#f8f9fa] text-zinc-800'
        }`}>
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
              href={'#'}
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
          onClick={() => {
            setIsOpened(!isOpened);
          }}
        />
      </header>
      <SideBar setIsOpened={setIsOpened} isOpened={isOpened} />
    </Fragment>
  );
};

export default Header;
