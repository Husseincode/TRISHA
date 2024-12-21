/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use state';
import React, { useRef, useState } from 'react';
import Button from '@/app/components/Button/button';
import Card from '@/app/components/Card';
import { data } from '@/app/components/Section4/data';
import { useVisibility } from '../Ref/ref';

const SectionComp4 = () => {
  const [buttonSelected, setButtonSelected] = useState<string>('Best Sellers');
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef1 = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  const buttonRef3 = useRef<HTMLButtonElement>(null);
  //const cardRef = useRef<HTMLDivElement>(null);

  const isHeaderSectionShown = useVisibility(headingRef);
  const isButton1Shown = useVisibility(buttonRef1);
  const isButton2Shown = useVisibility(buttonRef2);
  const isButton3Shown = useVisibility(buttonRef3);
  //const isCardShown = useVisibility(cardRef);

  const handleSelection = (text: string) => {
    setButtonSelected(text);
  };
  return (
    <div className='flex flex-col lg:py-[100px] py-[50px] gap-[50px] slide-from-top overflow-hidden'>
      <h2
        ref={headingRef}
        className={`font-bold lg:text-[60px] md:text-[50px] text-[36px] md:leading-[61px] lg:leading-[73px] text-center text-[#008080] ${
          isHeaderSectionShown && 'slide-from-top'
        }`}>
        Trending Products
      </h2>
      {/**button options */}
      <div className='flex justify-center md:flex-row flex-col items-center gap-[10px]'>
        <Button
          ref={buttonRef1}
          text='Best Sellers'
          className={`h-[46px] lg:min-w-[152px] text-[18px] py-[12px] px-[24px] gap-[10px] ${
            isButton1Shown && 'slide-from-left'
          } ${
            buttonSelected === 'Best Sellers'
              ? 'bg-[#008080] hover:bg-[#274c4c] text-white'
              : 'bg-white text-[#212529]'
          } transition duration-500`}
          onClick={() => {
            handleSelection('Best Sellers');
          }}
        />
        <Button
          text='New Arrivals'
          ref={buttonRef2}
          className={`h-[46px] lg:min-w-[152px] text-[18px] py-[12px] px-[24px] gap-[10px] ${
            isButton2Shown && 'slide-from-bottom'
          } ${
            buttonSelected === 'New Arrivals'
              ? 'bg-[#008080] hover:bg-[#274c4c] text-white'
              : 'bg-white text-[#212529]'
          } transition duration-500`}
          onClick={() => {
            handleSelection('New Arrivals');
          }}
        />
        <Button
          text='Featured Products'
          ref={buttonRef3}
          className={`h-[46px] lg:min-w-[152px] text-[18px] py-[12px] px-[24px] gap-[10px] ${
            isButton3Shown && 'slide-from-right'
          } ${
            buttonSelected === 'Featured Products'
              ? 'bg-[#008080] hover:bg-[#274c4c] text-white'
              : 'bg-white text-[#212529]'
          } transition duration-500`}
          onClick={() => {
            handleSelection('Featured Products');
          }}
        />
      </div>

      {/**Can be modified later but now fixed as it is not fetching any data */}
      <div className=' flex justify-center items-center px-[30px]'>
        <div className='flex md:grid md:grid-cols-2 lg:flex lg:flex-row flex-rap flex-col md:gap-[20px] gap-[40px] transition duration-500'>
          {data.map((items: any, idx: number) => (
            <Card
              key={idx}
              text={items.text}
              img={items.showImg}
              isDisabled={false}
              percentOff={items.percentOff}
              price={items.price}
              outdatedPrice={items.outdatedPrice}
              subImages={items.images}
              title={items.text}
              className={`${idx === 2 && ' justify-center w-fit mx-auto'}`}
              //ref={cardRef}
              // className={`${isCardShown && 'slide-from-right'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionComp4;
