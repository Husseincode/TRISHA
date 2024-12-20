/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import './styles.css';
import Card from '@/app/components/Card';
import { data } from '@/app/components/Section4/data';

const SectionComp7 = () => {
  return (
    <section className='flex items-center justify-center'>
      <div className='min-h-[800px] container w-full flex gap-[27px] lg:flex-row flex-col mt-[80px] px-2'>
        <div
          className={`lg:w-[409px] w-full h-[770px] special_collection flex items-end px-4`}>
          <div className='h-[270px] w-full flex flex-col justify-between'>
            <div>
              <h2 className='font-extrabold text-[40px] leading-[48px] text-center text-[#FFFFFF]'>
                Special <br /> collection of
              </h2>
            </div>
            <div className='w-full flex justify-center items-center'>
              <time className='font-semibold text-[100px] leading-[121px] text-center text-[#008080]'>
                2024
              </time>
            </div>
          </div>
        </div>
        <div className='min-h-[682px] lg:min-w-[800px] w-full flex flex-col gap-[27px]'>
          <h2 className='font-bold text-[48px] leading-[58px] text-[#008080]'>
            Wigs categories
          </h2>
          {/**Can be modified later but now fixed as it is not fetching any data */}
          <div className='flex justify-center items-center'>
            <div className='flex md:flex-row flex-rap flex-col md:gap-[20px] gap-[40px] transition duration-500'>
              {data.map((items: any, idx: number) => {
                return (
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
                    className={`${
                      idx === 2 && ' justify-center w-fit mx-auto'
                    }`}
                    //ref={cardRef}
                    // className={`${isCardShown && 'slide-from-right'}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionComp7;
