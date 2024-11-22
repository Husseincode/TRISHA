/** @format */
/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client';
import React, { useEffect, useState } from 'react';
import '@/app/styles/styles.css';
import {
  BreadCrumb,
  BreadCrumb2,
  BreadCrumb3,
} from '@/app/components/onLoad/breadcrumbs';

const Loading = () => {
  const [initialColor, setInitialColor] = useState<string>('#ABA7A7');
  const [reverseInitialColor, setReverseInitialColor] =
    useState<string>('#757272');

  //useEffects
  useEffect(() => {
    const intervalId = setTimeout(() => {
      initialColor === '#ABA7A7'
        ? setInitialColor('#757272')
        : setInitialColor('#ABA7A7');
    }, 1200);

    return () => clearTimeout(intervalId);
  }, [initialColor]);

  useEffect(() => {
    const reverseIntervalId = setTimeout(() => {
      reverseInitialColor === '#757272'
        ? setReverseInitialColor('#ABA7A7')
        : setReverseInitialColor('#757272');
    }, 1200);

    return () => clearTimeout(reverseIntervalId);
  }, [reverseInitialColor]);

  return (
    <section className='flex flex-col justify-center items-center'>
      {/**navbar */}
      <nav className='w-full flex justify-between items-center py-[23px] px-[16px] lg:py-[16px] lg:px-[69px] min-h-[102px] slide-from-top bg-[#E3E9F1]'>
        <svg
          width='217'
          className='lg:w-[217px] w-[175px]'
          height='70'
          viewBox='0 0 217 70'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle
            cx='35'
            cy='35'
            r='35'
            className='transition duration-500 slide-from-left'
            fill={initialColor}
          />
          <rect
            x='67'
            y='53'
            width='150'
            height='15'
            rx='7.5'
            className='transition duration-500 slide-from-bottom'
            fill={initialColor}
          />
        </svg>
        <svg
          width='576'
          height='26'
          viewBox='0 0 576 26'
          fill='none'
          className='hidden lg:inline'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            y='0.75'
            width='70'
            height='25'
            rx='12'
            className='transition duration-500'
            fill={initialColor}
          />
          <rect
            x='132'
            y='0.75'
            width='90'
            height='25'
            rx='12'
            className='transition duration-500'
            fill={initialColor}
          />
          <rect
            x='254'
            y='0.25'
            width='200'
            height='25'
            rx='12'
            className='transition duration-500'
            fill={initialColor}
          />
          <rect
            x='486'
            y='0.75'
            width='90'
            height='25'
            rx='12'
            className='transition duration-500'
            fill={initialColor}
          />
        </svg>
        <svg
          className='lg:hidden w-[70px] h-[70px]'
          width='70'
          height='70'
          viewBox='0 0 70 70'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            width='70'
            height='70'
            rx='12'
            className='transition duration-500'
            fill={initialColor}
          />
        </svg>
      </nav>

      {/**hero section */}
      <div className='min-h-[710px] container py-[50px] px-[20px] flex flex-col items-center gap-[20px]'>
        <svg
          width='1000'
          height='400'
          viewBox='0 0 1000 400'
          fill='none'
          className='hidden lg:inline slide-from-bottom'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            x='257'
            width='485.83'
            height='271.647'
            rx='12'
            className='transition duration-500'
            fill={reverseInitialColor}
          />
          <rect
            x='46.9636'
            y='125.637'
            width='323.887'
            height='271.647'
            rx='12'
            className='transition duration-500'
            fill={initialColor}
          />
          <rect
            x='595.142'
            y='125.637'
            width='404.858'
            height='271.647'
            rx='12'
            className='transition duration-500'
            fill={initialColor}
          />
          <rect
            y='196.265'
            width='121.457'
            height='203.735'
            rx='12'
            className='transition duration-500'
            fill={reverseInitialColor}
          />
        </svg>

        <svg
          width='600'
          height='255'
          viewBox='0 0 600 255'
          fill='none'
          className='hidden md:inline lg:hidden'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            x='134'
            width='331.492'
            height='210.744'
            rx='12'
            fill='#757272'
          />
          <rect
            x='16.5746'
            y='96.9421'
            width='248.619'
            height='158.058'
            rx='12'
            fill='#ABA7A7'
          />
          <rect
            x='351.381'
            y='94.8347'
            width='248.619'
            height='158.058'
            rx='12'
            fill='#ABA7A7'
          />
          <rect
            y='139.091'
            width='66'
            height='115.909'
            rx='12'
            fill='#757272'
          />
        </svg>

        <svg
          width='309'
          height='162'
          viewBox='0 0 309 162'
          fill='none'
          className='md:hidden slide-from-bottom'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            x='69'
            width='170.133'
            height='133.516'
            rx='12'
            fill='#757272'
          />
          <rect
            x='9.03601'
            y='61.4172'
            width='127.6'
            height='100.137'
            rx='12'
            fill='#ABA7A7'
          />
          <rect
            x='180.871'
            y='60.0821'
            width='127.6'
            height='100.137'
            rx='12'
            fill='#ABA7A7'
          />
          <rect
            x='0.529358'
            y='88.1204'
            width='51.04'
            height='73.4337'
            rx='12'
            fill='#757272'
          />
        </svg>

        <svg
          width='1400'
          className='w-full lg:inline hidden slide-from-right'
          height='30'
          viewBox='0 0 1400 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            width='1400'
            height='30'
            className='transition duration-500'
            fill={initialColor}
          />
        </svg>

        <div className='flex flex-col justify-center items-center text-center min-h-[111px] lg:hidden slide-from-bottom'>
          <svg
            width='1400'
            className='w-full'
            height='30'
            viewBox='0 0 1400 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              width='1400'
              height='30'
              className='transition duration-500'
              fill={initialColor}
            />
          </svg>
          <svg
            width='1400'
            className='w-full'
            height='30'
            viewBox='0 0 1400 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              width='1400'
              height='30'
              className='transition duration-500'
              fill={initialColor}
            />
          </svg>
          <svg
            width='1000'
            className='w-full md:hidden'
            height='30'
            viewBox='0 0 1400 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              width='1000'
              height='30'
              className='transition duration-500'
              fill={initialColor}
            />
          </svg>
        </div>

        <svg
          width='301'
          height='51'
          viewBox='0 0 301 51'
          fill='none'
          className='slide-from-bottom'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            x='0.5'
            y='0.554047'
            width='118'
            height='50'
            rx='12'
            className='transition duration-500'
            fill={initialColor}
          />
          <rect
            x='20'
            y='15'
            width='80'
            height='20'
            rx='10'
            className='transition duration-500'
            fill={reverseInitialColor}
          />
          <rect
            x='124.259'
            y='0.554047'
            width='176.241'
            height='50'
            rx='12'
            className='transition duration-500'
            fill={initialColor}
          />
          <rect
            x='147'
            y='15'
            width='130'
            height='20'
            rx='10'
            className='transition duration-500'
            fill={reverseInitialColor}
          />
        </svg>
      </div>

      {/**first section */}
      <div
        className={`min-h-[1226px] bg-[#757272] w-full flex flex-col gap-[20px] items-center justify-center`}>
        <BreadCrumb2 />
      </div>

      {/**second section */}
      <div className='min-h-[800px] py-[100px] gap-[40px] flex flex-col lg:flex-row'>
        <BreadCrumb
          initialColorType={initialColor}
          reverseColorType={reverseInitialColor}
        />
        <div
          className={`lg:w-1/3 w-[300px] min-h-[599px] slide-from-bottom bg-[#757272]`}>
          <div className='p-10 flex flex-col gap-[50px] items-center justify-center'>
            <svg
              width='200'
              height='72'
              viewBox='0 0 200 72'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                y='0.0974121'
                width='200'
                height='71'
                rx='12'
                fill={initialColor}
                className='transition duration-500'
              />
            </svg>
            <svg
              width='350'
              className='lg:w-[300px] w-full'
              height='99'
              viewBox='0 0 350 99'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                y='0.908569'
                width='350'
                height='22'
                rx='11'
                fill={initialColor}
                className='transition duration-500'
              />
              <rect
                y='38.7462'
                width='350'
                height='22'
                rx='11'
                fill={initialColor}
                className='transition duration-500'
              />
              <rect
                x='35'
                y='76.584'
                width='280'
                height='22'
                rx='11'
                fill={initialColor}
                className='transition duration-500'
              />
            </svg>
            <svg
              width='250'
              height='71'
              viewBox='0 0 250 71'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                y='0.259766'
                width='250'
                height='70'
                rx='12'
                fill={initialColor}
                className='transition duration-500'
              />
              <rect
                x='40'
                y='22.03'
                width='170'
                height='25'
                rx='12'
                fill={reverseInitialColor}
                className='transition duration-500'
              />
            </svg>
          </div>
        </div>
        <BreadCrumb
          initialColorType={initialColor}
          reverseColorType={reverseInitialColor}
        />
      </div>

      {/**third section */}
      <div
        className={`min-h-[600px] bg-[#757272] w-full flex flex-col gap-[20px] items-center justify-center`}>
        <BreadCrumb2 />
      </div>

      {/**fourth section */}
      <div className='flex flex-col min-h-[435px] py-[100px] gap-[50px] slide-from-top'>
        <svg
          width='650'
          height='120'
          viewBox='0 0 650 120'
          fill='none'
          className='lg:w-[intial] w-full'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            width='650'
            height='120'
            className='transition duration-500'
            fill={reverseInitialColor}
          />
        </svg>
        <div className='flex'>
          <svg
            width='580'
            height='65'
            viewBox='0 0 580 65'
            fill='none'
            className='lg:w-[intial] w-full'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              width='180'
              height='65'
              transform='translate(0.512512)'
              className='transition duration-500'
              fill={reverseInitialColor}
            />
            <rect
              width='130'
              height='25'
              transform='translate(26 22)'
              className='transition duration-500'
              fill={initialColor}
            />
            <rect
              width='130'
              height='25'
              transform='translate(209.14 17.1904)'
              className='transition duration-500'
              fill={reverseInitialColor}
            />
            <rect
              width='190'
              height='25'
              transform='translate(389.488 17.1904)'
              className='transition duration-500'
              fill={reverseInitialColor}
            />
          </svg>
        </div>
      </div>

      {/**fifth section */}
      <div className='flex flex-col md:flex-row slide-from-left py-[100px] gap-[43px] px-[10px]'>
        {Array.from({ length: 3 }).map((__, idx: number) => {
          return (
            <BreadCrumb3
              key={idx}
              initialColorType={initialColor}
              reverseColorType={reverseInitialColor}
            />
          );
        })}
      </div>
    </section>
  );
};

/**
 * lg:w-[1440px] md:w-[744px] w-[375px]
 */

export default Loading;
