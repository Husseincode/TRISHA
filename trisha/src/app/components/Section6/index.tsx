/** @format */

import React from 'react';
import './styles.css';
import { images } from './data';

const SectionComp6 = () => {
  return (
    <div className='w-full flex justify-center items-center bg-[#757272] overflow-scroll scrollbar-hidden'>
      <div className='slider'>
        <div className='flex slides'>
          {images.map((img, idx: number) => (
            <div
              className='image'
              style={{ background: `url(${img.src})` }}
              key={idx}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionComp6;
