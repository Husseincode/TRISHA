/** @format */

//import React from 'react'

import React, { useEffect, useState } from 'react';

export const useVisibility = (
  ref: React.RefObject<
    | HTMLDivElement
    | HTMLSpanElement
    | HTMLElement
    | HTMLHeadingElement
    | HTMLButtonElement
    | HTMLLabelElement
  >
) => {
  const [isSectionShown, setIsSectionShown] = useState<boolean>(false);
  const makeSectionVisible = () => {
    if (!ref.current) return;
    const getTop = ref.current?.getBoundingClientRect().top;
    const height = window.innerHeight;

    setIsSectionShown(getTop < height);
  };

  useEffect(() => {
    window.addEventListener('scroll', makeSectionVisible);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', makeSectionVisible);
    };
  }, [ref]);

  return isSectionShown;
};
