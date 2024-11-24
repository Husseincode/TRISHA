/** @format */

import React from 'react';

const Section7 = () => {
  return (
    <div className='w-full flex justify-center items-center min-h-[500px] bg-[#757272]'>
      <div className='container flex md:flex-row flex-col justify-between h-[inherit] slide-from-bottom border-t-[1px] border-[#ABA7A7]'>
        {Array.from({ length: 3 }).map((__, idx: number) => (
          <div
            key={idx}
            className={`border-r-[1px] ${
              idx === 2 && 'border-r-0'
            } border-[#ABA7A7] w-full md:w-1/3 h-[500px]`}
          />
        ))}
      </div>
    </div>
  );
};

export default Section7;
