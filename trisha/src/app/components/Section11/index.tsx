/** @format */

'use client';
import React, { useRef } from 'react';
import { useVisibility } from '../Ref/ref';
import { data } from './data';
import ReUse from './ReUse';

const SectionComp11 = () => {
  const headRef = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const isHeadingVisible = useVisibility(headRef);
  //const isDivVisible = useVisibility(divRef);

  return (
    <div className='w-full flex items-center justify-center min-h-[727px] py-[20px] lg:py-[80px] px-[30px]'>
      <div className='flex flex-col gap-[30px] container lg:px-[50px] overflow-hidden'>
        <h2
          ref={headRef}
          className={`font-bold lg:text-[60px] text-[40px] text-center lg:leading-[73px] leading-[48px] text-[#008080] ${
            isHeadingVisible && 'slide-from-top'
          }`}>
          Recent Blog
        </h2>
        <div className='flex gap-[28px] lg:flex-row flex-col md:grid lg:flex md:grid-cols-2'>
          {data.map((item, idx: number) => (
            <ReUse
              onClick={() => {}}
              ref={divRef}
              {...item}
              // className={`${isDivVisible && 'slide-from-right'}`}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionComp11;
