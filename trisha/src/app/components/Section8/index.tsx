/** @format */
import React, { useRef } from 'react';
import './styles.css';
import { data } from './data';
import ReUse from './Reuse';
import { useVisibility } from '../Ref/ref';

export const SectionComp8 = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const isTextVisible = useVisibility(textRef);
  const isHeadingVisible = useVisibility(headingRef);
  const isDivVisible = useVisibility(divRef);

  return (
    <div className='seccomp8BG min-h-[645px] py-[100px] px-[70px] md:px-[90px] gap-[20px] flex md:items-center md:justify-center mt-[60px] bg-[#757272] w-full'>
      <div className='container flex flex-col gap-[55px] slide-from-bottom'>
        <div className='flex flex-col gap-[20px] overflow-hidden'>
          <span
            ref={textRef}
            className={`lg:font-bold lg:text-[32px] text-[24px] leading-[29px] lg:leading-[38px] text-[#FFFFFF] ${
              isTextVisible && 'slide-from-left'
            }`}>
            People Says About Us?
          </span>
          <h2
            ref={headingRef}
            className={`font-bold lg:text-[70px] md:leading-[72px] md:text-[60px] text-[44px] leading-[53px] lg:leading-[85px] text-[#008080] ${
              isHeadingVisible && 'slide-from-right'
            }`}>
            Testimonials
          </h2>
        </div>
        <div className='flex justify-between md:flex-row flex-col gap-[30px] md:gap-[100px]'>
          {data.map((item, idx: number) => {
            return (
              <ReUse
                ref={divRef}
                key={idx}
                {...item}
                className={`${isDivVisible && 'slide-from-left'}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
