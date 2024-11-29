/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import Loading from '@/app/components/Loading';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import SectionComp from '@/app/components/Section1';

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
    <section className='w-full flex items-center justify-center flex-col'>
      <Header />
      <Hero />
      <SectionComp />
    </section>
  );
};

export default EntryPoint;
