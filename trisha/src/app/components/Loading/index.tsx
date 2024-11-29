/** @format */
/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client';
import React, { useCallback, useEffect, useState } from 'react';
import '@/app/styles/styles.css';
import Navbar from '@/app/components/Loading/navbar';
import HeroSection from '@/app/components/Loading/hero_section';
import Section1 from '@/app/components/Loading/section1';
import Section2 from '@/app/components/Loading/section2';
import Section3 from '@/app/components/Loading/section3';
import Section4 from '@/app/components/Loading/section4';
import Section5 from '@/app/components/Loading/section5';
import Section6 from '@/app/components/Loading/section6';
import Section7 from '@/app/components/Loading/section7';
import Section8 from '@/app/components/Loading/section8';
import Section9 from '@/app/components/Loading/section9';
import Section10 from '@/app/components/Loading/section10';
import Section11 from '@/app/components/Loading/section11';
import Section12 from '@/app/components/Loading/section12';
import Section13 from '@/app/components/Loading/section13';
import Footer from '@/app/components/Loading/footer';

const Loading = () => {
  const [initialColor, setInitialColor] = useState<string>('#ABA7A7');
  const [reverseInitialColor, setReverseInitialColor] =
    useState<string>('#757272');

  // Toggle initial color
  const toggleInitialColor = useCallback(() => {
    setInitialColor((prevColor: string) =>
      prevColor === '#ABA7A7' ? '#757272' : '#ABA7A7'
    );
  }, []);

  // Toggle reverse initial color
  const toggleReverseInitialColor = useCallback(() => {
    setReverseInitialColor((prevColor: string) =>
      prevColor === '#757272' ? '#ABA7A7' : '#757272'
    );
  }, []);

  //useEffects
  useEffect(() => {
    const intervalId = setInterval(toggleInitialColor, 1200);
    return () => clearInterval(intervalId);
  }, [toggleInitialColor]);

  useEffect(() => {
    const reverseIntervalId = setInterval(toggleReverseInitialColor, 1200);
    console.log(window); // You can remove this log for performance reasons
    return () => clearInterval(reverseIntervalId);
  }, [toggleReverseInitialColor]);

  return (
    <section className='flex flex-col justify-center items-center'>
      {/**navbar */}
      <Navbar initialColor={initialColor} />

      {/**hero section */}
      <HeroSection
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      />

      {/**first section */}
      <Section1 />

      {/**second section */}
      <Section2
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      />

      {/**third section */}
      <Section3 />

      {/**fourth section */}
      <Section4
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      />

      {/**fifth section */}
      <Section5
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      />

      {/**Sixth section */}
      <Section6 />

      {/**Seventh section */}
      <Section7 />

      {/**Eighth section */}
      <Section8
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      />

      {/**Nineth sector */}
      <Section9
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      />

      {/**tenth sector */}
      <Section10
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      />

      {/**Eleventh sector */}
      <Section11
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      />

      {/**Twelve sector */}
      <Section12
        initialColor={initialColor}
        reverseInitialColor={reverseInitialColor}
      />

      {/**Thirteen sector */}
      <Section13 />

      {/**Footer sector */}
      <Footer />
    </section>
  );
};

/**
 * lg:w-[1440px] md:w-[744px] w-[375px]
 */

export default Loading;
