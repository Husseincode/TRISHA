/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import React, { useEffect, useRef, useState } from 'react';
//import { SectionComp2Data } from './data';
import Image from 'next/image';
import ViewCollectionButton from '../Button/viewCollection';
import img1 from '@/assets/Trisha/Trisha/img-1.jpg';
import img2 from '@/assets/Trisha/Trisha/img-2.jpg';

const SectionComp2 = () => {
  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const cardRef3 = useRef<HTMLDivElement>(null);

  const [isCardRef1Shown, setIsCardRef1Shown] = useState<boolean>(false);
  const [isCardRef2Shown, setIsCardRef2Shown] = useState<boolean>(false);
  const [isCardRef3Shown, setIsCardRef3Shown] = useState<boolean>(false);

  const makeCardRef1Visible = () => {
    const getTop: number | undefined | any =
      cardRef1.current?.getBoundingClientRect().top;
    const height = window.innerHeight;

    setIsCardRef1Shown(getTop < height);
  };

  const makeCardRef2Visible = () => {
    const getTop: number | undefined | any =
      cardRef2.current?.getBoundingClientRect().top;
    const height = window.innerHeight;

    setIsCardRef2Shown(getTop < height);
  };

  const makeCardRef3Visible = () => {
    const getTop: number | undefined | any =
      cardRef3.current?.getBoundingClientRect().top;
    const height = window.innerHeight;

    setIsCardRef3Shown(getTop < height);
  };

  useEffect(() => {
    window.addEventListener('scroll', makeCardRef1Visible);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', makeCardRef1Visible);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', makeCardRef2Visible);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', makeCardRef2Visible);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', makeCardRef3Visible);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', makeCardRef3Visible);
    };
  }, []);
  return (
    <div className='min-h-[766px] py-[50px] md:py-[100px] gap-[10px] flex items-center justify-center'>
      <div
        className={`flex flex-col lg:flex-row gap-[60px] lg:gap-[10px] min-h-[566px]`}>
        {/* <BreadCrumb
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      /> */}
        {/**Card 1 */}
        <div
          ref={cardRef1}
          className={`h-[523px] lg:w-[400px] w-full flex flex-col items-center gap-[25px] px-[40px] ${
            isCardRef1Shown && 'slide-from-left'
          }`}>
          <Image
            src={img1}
            alt=''
            width={256}
            height={287}
            className='lg:h-[287px] w-full'
          />
          <h2 className='font-bold lg:text-[48px] lg:leading-[58px] text-center text-[#008080]'>
            Men wigs
          </h2>
          <span className='font-inter font-normal text-[15px] leading-[18px] text-center text-[#212529]'>
            men&apos;s wigs are hairpieces to cover thining hair, baldness, or
            for fashion purposes.They are used for convenience, costume
            purposes, or to restore confidence due to hair loss caused by
            medical conditions like alopecia or chemotherapy.
          </span>
          <ViewCollectionButton />
        </div>

        {/**Card 2 */}
        <div
          ref={cardRef2}
          className={`h-[523px] lg:w-[400px] w-full flex flex-col items-center gap-[25px] px-[40px] ${
            isCardRef2Shown && 'slide-from-right'
          }`}>
          <Image
            src={img2}
            alt=''
            width={256}
            height={287}
            className='lg:h-[287px] w-full'
          />
          <h2 className='font-bold lg:text-[48px] lg:leading-[58px] text-center text-[#008080]'>
            Men wigs
          </h2>
          <span className='font-inter font-normal text-[15px] leading-[18px] text-center text-[#212529]'>
            men&apos;s wigs are hairpieces to cover thining hair, baldness, or
            for fashion purposes.They are used for convenience, costume
            purposes, or to restore confidence due to hair loss caused by
            medical conditions like alopecia or chemotherapy.
          </span>
          <ViewCollectionButton />
        </div>

        {/**Card 3 */}
        <div
          ref={cardRef3}
          className={`h-[523px] lg:w-[400px] w-full flex flex-col items-center gap-[25px] px-[40px] ${
            isCardRef3Shown && 'slide-from-left'
          }`}>
          <Image
            src={img1}
            alt=''
            width={256}
            height={287}
            className='lg:h-[287px] w-full'
          />
          <h2 className='font-bold lg:text-[48px] lg:leading-[58px] text-center text-[#008080]'>
            Men wigs
          </h2>
          <span className='font-inter font-normal text-[15px] leading-[18px] text-center text-[#212529]'>
            men&apos;s wigs are hairpieces to cover thining hair, baldness, or
            for fashion purposes.They are used for convenience, costume
            purposes, or to restore confidence due to hair loss caused by
            medical conditions like alopecia or chemotherapy.
          </span>
          <ViewCollectionButton />
        </div>
        {/* {SectionComp2Data.map((item, idx: number) => (
          <div
            key={idx}
            className='h-[523px] lg:w-[400px] w-full flex flex-col items-center gap-[25px] px-[40px]'>
            <Image
              src={item.image}
              alt=''
              width={256}
              height={287}
              className='lg:h-[287px] w-full'
            />
            <h2 className='font-bold lg:text-[48px] lg:leading-[58px] text-center text-[#008080]'>
              {item.heading}
            </h2>
            <span className='font-[inter] font-normal text-[15px] leading-[18px] text-center text-[#212529]'>
              men&apos;s wigs are hairpieces to cover thining hair, baldness, or
              for fashion purposes.They are used for convenience, costume
              purposes, or to restore confidence due to hair loss caused by
              medical conditions like alopecia or chemotherapy.
            </span>
            <ViewCollectionButton />
          </div>
        ))} */}
        {/* <div
          className={`lg:w-1/3 w-[300px] border-2 md:w-[400px] min-h-[599px] slide-from-bottom bg-[#757272]`}>
          <div className='p-10 flex flex-col gap-[50px] items-center justify-center'></div>
        </div> */}
        {/* <BreadCrumb
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      /> */}
      </div>
    </div>
  );
};

export default SectionComp2;
