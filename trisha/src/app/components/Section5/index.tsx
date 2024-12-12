/** @format */

'use client';
import React, { useRef } from 'react';
import './styles.css';
import Button from '../Button/button';
import { Component1 } from './Reuse';
import HazardIcon from './svgs/hazard.svg';
import PaintIcon from './svgs/paint.svg';
import HeartIcon from './svgs/love.svg';
import LeafIcon from './svgs/leaf.svg';
import { useVisibility } from '../Ref/ref';

const Section5Comp = () => {
  const chooseRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const spanRef2 = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const isVisible = useVisibility(chooseRef);
  const isHeadingVisible = useVisibility(headingRef);
  const isSpanElementVisible = useVisibility(spanRef);
  const isSpanElement2Visible = useVisibility(spanRef2);
  const isButtonVisible = useVisibility(buttonRef);
  const isDivVisible = useVisibility(divRef);

  return (
    <div className='min-h-[702px] secComp5 bg-[#757272] py-[100px] px-[43px] md:px-[50px] w-full flex justify-center gap-[100px] items-center'>
      <div className='container min-h-[505px] flex items-center justify-center lg:flex-row flex-col gap-[20px] lg:gap-[60px] overflow-hidden'>
        <div className='min-h-[330px] lg:w-1/2 w-full flex flex-col gap-[15px] lg:gap-[27px]'>
          <span
            ref={chooseRef}
            className={`md:text-[20px] lg:text-[24px] text-base leading-[24px] font-bold lg:leading-[29px] text-[#FFFFFF] ${
              isVisible && 'slide-from-top'
            }`}>
            Why people choose us?
          </span>
          <h2
            ref={headingRef}
            className={`lg:text-[60px] md:text-[50px] text-[36px] leading-[44px] md:leading-[60px] font-bold lg:leading-[73px] text-[#008080] ${
              isHeadingVisible && 'slide-from-left'
            }`}>
            Go ahead, try one!
          </h2>
          <span
            ref={spanRef}
            className={`md:text-[20px] text-base font-normal leading-[20px] lg:leading-[24px] text-[#FFFFFF] ${
              isSpanElementVisible && 'slide-from-bottom'
            }`}>
            We are always willing to make our customers happy and are ready to
            support your most bold and creative ideas in hairstyle.
          </span>
          <span
            ref={spanRef2}
            className={`lg:text-[24px] text-[20px] font-normal lg:leading-[29px] text-[#008080] ${
              isSpanElement2Visible && 'slide-from-left'
            }`}>
            Feel free to express yourself through your looks!
          </span>
          <Button
            text='More Details'
            ref={buttonRef}
            className={`py-[12px] px-[24px] bg-[#008080] hover:bg-[#255959] transition duration-500 font-semibold text-[18px] leading-[21px] text-[#FFFFFF] w-[158px] ${
              isButtonVisible && 'slide-from-bottom'
            }`}
          />
        </div>
        <div
          ref={divRef}
          className={`min-h-[505px] lg:w-1/2 w-full flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-[20px] ${
            isDivVisible && 'slide-from-right'
          }`}>
          <Component1
            heading='Easy to Re-Model'
            img={HazardIcon}
            text='In few minutes you can wear them to a party, for a lunch date, for cosplay and to anywhere!'
          />
          <Component1
            heading='Apply custom colors'
            img={PaintIcon}
            text='Extraordinary color choice Ombre, Black, Blonde, Blue, Purple, Grey or Silver Hair Shades'
          />
          <Component1
            heading='We love to Serve'
            img={HeartIcon}
            text='Our motto is to make you look like celebrity. Customer satisfaction is our ultimate goal.'
          />
          <Component1
            heading='Natural Products'
            img={LeafIcon}
            text='100% unprocessed virgin Brazilian high quality Human Hair offer a natural looking style and soft feel'
          />
        </div>
      </div>
    </div>
  );
};

export default Section5Comp;
