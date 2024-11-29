/** @format */

import React, { FC } from 'react';
import { NavbarStraightLine } from '@/app/components/Loading/breadcrumbs';

interface NavbarProps {
  initialColor: string;
}

const NavbarComponent: FC<NavbarProps> = ({ initialColor }) => {
  return (
    <header className='w-full flex justify-between items-center py-[23px] px-[16px] lg:py-[16px] lg:px-[69px] min-h-[102px] slide-from-top bg-[#E3E9F1]'>
      {/**Image or Logo section */}
      <div className='h-[70px] w-[175px] lg:w-[217px] flex items-end'>
        <div
          style={{ backgroundColor: initialColor }}
          className={`w-[70px] h-[70px] rounded-full border-[3px] border-gray-400 transition-all ease-linear duration-500`}></div>
        <div
          style={{ backgroundColor: initialColor }}
          className={`lg:w-[150px] w-[100px] border-[3px] border-gray-400 lg:h-[15px] h-[10px] rounded-[12px] transition duration-500`}></div>
      </div>

      {/**Navigation For Larger Devices */}
      <div className={`hidden lg:flex gap-[40px]`}>
        <NavbarStraightLine
          style={{ backgroundColor: initialColor }}
          initialColor={initialColor}
          className='h-[25px] w-[70px] border-[3px] border-gray-400 transition duration-500'
        />
        <NavbarStraightLine
          style={{ backgroundColor: initialColor }}
          initialColor={initialColor}
          className='h-[25px] w-[90px] border-[3px] border-gray-400 transition duration-500'
        />
        <NavbarStraightLine
          initialColor={initialColor}
          style={{ backgroundColor: initialColor }}
          className='h-[25px] w-[200px] border-[3px] border-gray-400 transition duration-500'
        />
        <NavbarStraightLine
          style={{ backgroundColor: initialColor }}
          initialColor={initialColor}
          className='h-[25px] w-[90px] transition border-[3px] border-gray-400 duration-500'
        />
      </div>

      {/**Bar for mobile devices */}
      <div
        style={{ backgroundColor: initialColor }}
        className={`w-[70px] h-[70px] lg:hidden rounded-[12px] transition duration-500`}></div>
    </header>
  );
};

const Navbar = React.memo(NavbarComponent);

export default Navbar;
