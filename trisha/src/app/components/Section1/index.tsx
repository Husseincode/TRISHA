/** @format */

'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useEffect, useRef, useState } from 'react';
import './styles.css';

const SectionComp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSectionShown, setIsSectionShown] = useState<boolean>(false);
  const [top, setTop] = useState<any>(0);

  const makeSectionVisible = () => {
    const getTop: number | undefined | any =
      ref.current?.getBoundingClientRect().top;
    const height = window.innerHeight;

    setTop(height);
    setIsSectionShown(getTop < height);
  };

  useEffect(() => {
    window.addEventListener('scroll', makeSectionVisible);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', makeSectionVisible);
    };
  }, []);
  return (
    <Fragment>
      <div
        ref={ref}
        className={`min-h-[744px] md:min-h-[900px] ${
          isSectionShown ? 'opacity-100' : 'opacity-0'
        } lg:min-h-[1226px] transition duration-500 section1BGImg w-full flex flex-col gap-[20px] items-center justify-center`}></div>
      <div
        ref={ref}
        className={`min-h-[744px] md:min-h-[900px] absolute top-${top.toString()} mt-[630px] md:mt-[680px] lg:mt-[970px] ${
          isSectionShown && 'opacity-100'
        } opacity-0 lg:min-h-[1226px] transition duration-500 w-full flex flex-col gap-[20px] items-center justify-center`}>
        <div className='w-full h-[442px] flex justify-center items-center flex-col gap-[15px]'>
          <div className='lg:min-w-[640px] w-[295px] flex flex-col items-center justify-center gap-[15px]'>
            <span
              style={{
                fontFamily: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`,
              }}
              className='lg:text-[32px] md:text-[30px] text-[24px] lg:leading-[32px] md:leading-[30px] leading-[24px] text-center font-normal text-[#FFFFFF]'>
              Affordable price
            </span>
            <h2 className='lg:text-[70px] md:text-[50px] text-[36px] lg:leading-[85px] md:leading-[61px] leading-[44px] text-center text-[#008080] font-bold'>
              Perfect Style in wigs
            </h2>
            <span className='lg:text-[20px] md:text-[15px] text-[12px] lg:leading-[24px] md:leading-[18px] leading-[15px] font-normal text-center text-[#FFFFFF]'>
              Bring the freedom of multiple hairstyles and a completely natural
              look. High-quality and perfect fit 0.03 mm ultra-thin skin health
              systems without side effects. Enhance your beauty
            </span>
          </div>

          {/**View Collection Button */}
          <button
            type='button'
            title='View Collection'
            className='lg:h-[46px] lg:w-[240px] lg:py-[12px] lg:px-[48px] gap-[10px] bg-[#008080] hover:bg-[#104b4b] text-[#FFFFFF] lg:text-[18px] leading-[22px] text-center mt-6 transition duration-500'>
            View Collection
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SectionComp;
