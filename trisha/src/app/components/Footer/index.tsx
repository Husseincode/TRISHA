/** @format */

import React, { useRef } from 'react';
import './styles.css';
import Image from 'next/image';
import imgIcon from './svgs/img.svg';
import phoneIcon from './svgs/phone.svg';
import heartIcon from './svgs/heart.svg';
import headphoneIcon from './svgs/headphone.svg';
import Link from 'next/link';
import { cards, data, help, information, support } from './data';
import { useVisibility } from '../Ref/ref';

const Footer = () => {
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);
  const bottomDiv = useRef<HTMLDivElement>(null);

  const isFirstDivVisible = useVisibility(firstRef);
  const isSecondDivVisible = useVisibility(secondRef);
  const isThirdDivVisible = useVisibility(thirdRef);
  const isSecondSectionDivVisible = useVisibility(secondSectionRef);
  const isThirdSectionDivVisible = useVisibility(thirdSectionRef);
  const isBottomDivVisible = useVisibility(bottomDiv);

  return (
    <footer className='footer_section w-full flex justify-center items-center min-h-[748px] px-[20px] lg:px-[62px]'>
      <section className='container min-h-[748px] flex flex-col overflow-hidden'>
        <div className='w-full min-h-[677px] border-[1px] py-[45px] gap-[10px] border-[#008080]'>
          <div className='min-h-[587px] w-full flex flex-col gap-[54px]'>
            {/**Section 1 */}
            <div className='min-h-[49px] w-full px-[40px] gap-[40px] lg:gap-[149px] flex justify-between lg:flex-row flex-col items-center'>
              <div
                ref={firstRef}
                className={`gap-[15px] flex items-center ${
                  isFirstDivVisible && 'slide-from-left'
                }`}>
                <Image
                  src={imgIcon}
                  alt=''
                  width={44}
                  height={44}
                  className='w-[44px] h-[44px]'
                />
                <div className='flex flex-col gap-[9px]'>
                  <span className='font-bold text-base leading-[20px] text-[#BFE0E0]'>
                    Do you have any questions?
                  </span>
                  <Link
                    href={''}
                    className='font-bold text-base leading-[20px] text-[#008080]'>
                    Support@example.com
                  </Link>
                </div>
              </div>

              <div
                ref={secondRef}
                className={`gap-[15px] flex items-center ${
                  isSecondDivVisible && 'slide-from-bottom'
                }`}>
                <Image
                  src={phoneIcon}
                  alt=''
                  width={44}
                  height={44}
                  className='w-[44px] h-[44px]'
                />
                <div className='flex flex-col gap-[9px]'>
                  <span className='font-bold text-base leading-[20px] text-[#BFE0E0]'>
                    Mon - Fri: 8:00 - 17:00
                  </span>
                  <Link
                    href={''}
                    className='font-bold text-base leading-[20px] text-[#008080]'>
                    081-6766-2093
                  </Link>
                </div>
              </div>

              <div
                ref={thirdRef}
                className={`flex gap-[20px] items-center ${
                  isThirdDivVisible && 'slide-from-right'
                }`}>
                {data.map((item, idx: number) => (
                  <Link href={'#'} key={idx} title={item.name}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={30}
                      height={30}
                      className='w-[30px] h-[30px] rounded-full'
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/**Section 2 */}
            <div
              ref={secondSectionRef}
              className={`min-h-[381px] w-full flex lg:flex-row flex-col ${
                isSecondSectionDivVisible && 'slide-from-left'
              }`}>
              {/**Address */}
              <div className='lg:w-1/4 w-full p-[50px] h-[inherit] border-[1px] border-[#008080] lg:p-[40px] flex flex-col gap-[10px]'>
                <h2 className='font-black text-[27px] leading-[32px] text-[#FFFFFF] border-b-[3px] w-[55px] pb-1 border-[#008080]'>
                  Address
                </h2>
                <address
                  style={{ fontStyle: 'normal' }}
                  className='text-[18px] leading-[22px] text-[#BFE0E0] font-normal'>
                  No: 58 A, East Madison Street, Baltimore, MD, USA 4508, United
                  States
                </address>
              </div>
              {/**Help */}
              <div className='lg:w-1/4 w-full p-[50px] h-[inherit] border-[1px] border-[#008080] lg:p-[40px] flex flex-col gap-[10px]'>
                <h2 className='font-black text-[27px] leading-[32px] text-[#FFFFFF] border-b-[3px] w-[55px] pb-1 border-[#008080]'>
                  Help
                </h2>
                <div className='flex flex-col gap-[20px]'>
                  {help.map((item, idx: number) => (
                    <Link
                      title={item.name}
                      className='text-[18px] leading-[22px] text-[#BFE0E0]'
                      href={item.url}
                      key={idx}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/**Support */}
              <div className='lg:w-1/4 w-full p-[50px] h-[inherit] border-[1px] border-[#008080] lg:p-[40px] flex flex-col gap-[10px]'>
                <h2 className='font-black text-[27px] leading-[32px] text-[#FFFFFF] border-b-[3px] w-[55px] pb-1 border-[#008080]'>
                  Support
                </h2>
                <div className='flex flex-col gap-[20px]'>
                  {support.map((item, idx: number) => (
                    <Link
                      title={item.name}
                      className='text-[18px] leading-[22px] text-[#BFE0E0]'
                      href={item.url}
                      key={idx}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/**Information */}
              <div className='lg:w-1/4 w-full p-[50px] h-[inherit] border-[1px] border-[#008080] lg:p-[40px] flex flex-col gap-[10px]'>
                <h2 className='font-black text-[27px] leading-[32px] text-[#FFFFFF] border-b-[3px] w-[55px] pb-1 border-[#008080]'>
                  Information
                </h2>
                <div className='flex flex-col gap-[20px]'>
                  {information.map((item, idx: number) => (
                    <Link
                      title={item.name}
                      className='text-[18px] leading-[22px] text-[#BFE0E0]'
                      href={item.url}
                      key={idx}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/**section 3 */}
            <div
              ref={thirdSectionRef}
              className={`min-h-[49px] w-full px-[40px] lg:gap-[99px] flex justify-center lg:justify-between lg:flex-row flex-col gap-[40px] items-center ${
                isThirdSectionDivVisible && 'slide-from-right'
              }`}>
              <div className='gap-[15px] flex items-center'>
                <Image
                  src={imgIcon}
                  alt=''
                  width={44}
                  height={44}
                  className='w-[44px] h-[44px]'
                />
                <div className='flex flex-col gap-[9px]'>
                  <span className='font-bold text-base leading-[20px] text-[#BFE0E0]'>
                    Free shipping and Returns
                  </span>
                  <Link
                    href={''}
                    className='font-bold text-base leading-[20px] text-[#008080]'>
                    For all Orders over $500
                  </Link>
                </div>
              </div>

              <div className='gap-[15px] flex items-center'>
                <Image
                  src={heartIcon}
                  alt=''
                  width={44}
                  height={44}
                  className='w-[44px] h-[44px]'
                />
                <div className='flex flex-col gap-[9px]'>
                  <span className='font-bold text-base leading-[20px] text-[#BFE0E0]'>
                    Money back gaurantee
                  </span>
                  <Link
                    href={''}
                    className='font-bold text-base leading-[20px] text-[#008080]'>
                    100% Money back gaurantee
                  </Link>
                </div>
              </div>

              <div className='gap-[15px] flex items-center'>
                <Image
                  src={headphoneIcon}
                  alt=''
                  width={44}
                  height={44}
                  className='w-[44px] h-[44px]'
                />
                <div className='flex flex-col gap-[9px]'>
                  <span className='font-bold text-base leading-[20px] text-[#BFE0E0]'>
                    Support 24/7
                  </span>
                  <Link
                    href={''}
                    className='font-bold text-base leading-[20px] text-[#008080]'>
                    We answer for questions all the time
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={bottomDiv}
          className={`min-h-[67px] flex lg:flex-row flex-col mt-8 lg:mt-0 mb-3 justify-between items-center py-[10px] gap-[15px] px-[20px] ${
            isBottomDivVisible && 'slide-from-left'
          }`}>
          <div className='flex gap-[5px]'>
            {cards.map((item, idx: number) => (
              <Image
                src={item.image}
                width={50}
                height={42}
                alt=''
                className='w-[50px] h-[42px]'
                key={idx}
              />
            ))}
          </div>
          <span className='font-normal text-[18px] leading-[22px] text-[#BFE0E0]'>
            All right reserved C 2024, Design Theme{' '}
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
