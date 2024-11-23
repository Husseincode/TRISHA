/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import Loading from '@/app/components/Loading';

const EntryPoint = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //useEffects
  // useEffect(() => {
  //   const intervalID = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 6000);

  //   return () => clearTimeout(intervalID);
  // }, [isLoading]);

  if (isLoading) return <Loading />;
  return <div>Welcome</div>;
};

export default EntryPoint;
