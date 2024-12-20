/** @format */

import React from 'react';
import Card from '@/app/components/Card';
import { data } from './data';

const Section9Comp = () => {
  return (
    <div className='py-[100px] px-[30px] md:px-[50px] gap-[52px] w-full flex items-center justify-center'>
      <div className='container flex flex-col gap-[52px] items-center justify-center fade-in'>
        <h2 className='lg:font-extrabold lg:text-[60px] md:text-[50px] md:leading-[60px] text-[40px] leading-[48px] lg:leading-[72px] text-center text-[#008080]'>
          New&nbsp;<span className='lg:font-bold'>Arrivals</span>
        </h2>
        <div className='md:grid lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-4 flex flex-col w-full gap-[20px]'>
          {data.map((items, idx) => (
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
              className={`w-full`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section9Comp;
