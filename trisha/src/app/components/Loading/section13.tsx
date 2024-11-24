/** @format */

import React from 'react';
import { UnitCard } from '@/app/components/Loading/breadcrumbs';

const Section13 = () => {
  return (
    <div className='w-full flex justify-center items-center min-h-[403px] py-[100px]'>
      <div className='container flex justify-center items-center lg:flex-row flex-col slide-from-bottom'>
        {Array.from({ length: 3 }).map((__, idx) => (
          <div
            key={idx}
            className={`flex border-[1px] border-[#757272] items-center justify-center h-[200px]`}>
            {' '}
            <UnitCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section13;
