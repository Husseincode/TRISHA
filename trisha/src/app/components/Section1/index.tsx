/** @format */

'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useRef } from 'react';
import './styles.css';
import ViewCollectionButton from '../Button/viewCollection';
import { useVisibility } from '../Ref/ref';

const SectionComp = () => {
  const ref = useRef<HTMLSpanElement>(null);
  const isSectionShown = useVisibility(ref);
  return (
    <Fragment>
      <div
        className={`min-h-[744px] md:min-h-[900px] ${
          isSectionShown && 'opacity-100'
        } lg:min-h-[1226px] transition duration-500 section1BGImg w-full flex flex-col gap-[20px] items-center justify-center`}>
        {' '}
        <div className='w-full h-[442px] flex justify-center items-center flex-col gap-[15px] overflow-hidden'>
          <div
            className={`lg:min-w-[640px] md:w-[569px] w-[295px] flex flex-col items-center justify-center gap-[15px] ${
              isSectionShown && 'slide-from-left'
            }`}>
            <span
              ref={ref}
              className='font-inter lg:text-[32px] md:text-[30px] text-[24px] lg:leading-[32px] md:leading-[30px] leading-[24px] text-center font-normal text-[#FFFFFF]'>
              Affordable price
            </span>
            <h2 className='lg:text-[70px] md:text-[50px] text-[36px] lg:leading-[85px] md:leading-[61px] leading-[44px] text-center text-[#008080] font-bold'>
              Perfect Style in wigs
            </h2>
            <span className='lg:text-[20px] text-base lg:leading-[24px] leading-[20px] font-normal text-center text-[#FFFFFF]'>
              Bring the freedom of multiple hairstyles and a completely natural
              look. High-quality and perfect fit 0.03 mm ultra-thin skin health
              systems without side effects. Enhance your beauty
            </span>
          </div>

          {/**View Collection Button */}
          {/**nuild */}
          <ViewCollectionButton
            isVisible={isSectionShown}
            animationStyle='slide-from-right'
          />
        </div>
      </div>
      {/* <div
        className={`min-h-[744px] md:min-h-[900px] absolute border-2 border-black top-${top.toString()} -mt-[150px] md:mt-[680px] lg:mt-[170px] ${
          isSectionShown && 'opacity-100'
        } lg:min-h-[1226px] transition duration-500 w-full flex flex-col gap-[20px] items-center justify-center`}>
       
      </div> */}
    </Fragment>
  );
};

export default SectionComp;
