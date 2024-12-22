/** @format */

import React from 'react';
import { data } from './data';
import ReUse from './ReUse';

const SectionComp12 = () => {
  return (
    <div className='flex items-center justify-center min-h-[356px] lg:py-[100px] lg:px-[50px] px-[20px] w-full'>
      <div className='flex container w-full lg:flex-row flex-col'>
        {data.map((item, idx: number) => (
          <ReUse key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionComp12;
