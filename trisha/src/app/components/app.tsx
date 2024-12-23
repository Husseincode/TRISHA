/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import Loading from '@/app/components/Loading';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import SectionComp from '@/app/components/Section1';
import SectionComp2 from './Section2';
import SectionComp3 from './Section3';
import SectionComp4 from './Section4';
import Section5Comp from './Section5';
import SectionComp6 from './Section6';
import SectionComp7 from './Section7';
import { SectionComp8 } from './Section8';
import Section9Comp from './Section9';
import SectionComp10 from './Section10';
import SectionComp11 from './Section11';
import SectionComp12 from './Section12';
import Footer from './Footer';

const EntryPoint = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //useEffects
  useEffect(() => {
    const intervalID = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(intervalID);
  }, [isLoading]);

  if (isLoading) return <Loading />;
  return (
    <section className='w-full flex items-center justify-center flex-col min-h-[initial]'>
      <Header />
      <Hero />
      <SectionComp />
      <SectionComp2 />
      <SectionComp3 />
      <SectionComp4 />
      <Section5Comp />
      <SectionComp6 />
      <SectionComp7 />
      <SectionComp8 />
      <Section9Comp />
      <SectionComp10 />
      <SectionComp11 />
      <SectionComp12 />
      <Footer />
    </section>
  );
};

export default EntryPoint;
