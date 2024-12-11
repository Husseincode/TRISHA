/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use state';
import React, { useState } from 'react';
import Button from '@/app/components/Button/button';
import Card from '@/app/components/Card';
import { data } from '@/app/components/Section4/data';

const SectionComp4 = () => {
  const [buttonSelected, setButtonSelected] = useState<string>('Best Sellers');

  const handleSelection = (text: string) => {
    setButtonSelected(text);
  };
  return (
    <div className='flex flex-col min-h-[435px] pt-[100px] px-[50px] gap-[50px] slide-from-top'>
      <h2 className='font-bold lg:text-[60px] md:text-[50px] text-[36px] md:leading-[61px] lg:leading-[73px] text-center text-[#008080]'>
        Trending Products
      </h2>
      {/**button options */}
      <div className='flex justify-center md:flex-row flex-col items-center gap-[10px]'>
        <Button
          text='Best Sellers'
          className={`h-[46px] lg:min-w-[152px] text-[18px] py-[12px] px-[24px] gap-[10px] ${
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
          className={`h-[46px] lg:min-w-[152px] text-[18px] py-[12px] px-[24px] gap-[10px] ${
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
          className={`h-[46px] lg:min-w-[152px] text-[18px] py-[12px] px-[24px] gap-[10px] ${
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
      <div className='mt-10 flex justify-center items-center'>
        <div className='flex md:flex-row flex-rap flex-col gap-[10px]'>
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionComp4;
