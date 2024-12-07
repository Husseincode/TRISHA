/** @format */

import React from 'react';
import Card from '../components/Card';
import sampleImg from '@/assets/Trisha/Trisha/product8.jpg';
import subImg1 from '@/assets/Trisha/Trisha/product1.jpg';
import subImg2 from '@/assets/Trisha/Trisha/product7.jpg';
import subImg3 from '@/assets/Trisha/Trisha/product5.jpg';

const page = () => {
  const images = { img1: subImg1, img2: subImg2, img3: subImg3 };
  return (
    <section className='flex items-center justify-center w-full'>
      <div className='container flex gap-[30px]'>
        {Array.from({ length: 1 }).map((__, idx: number) => (
          <Card
            key={idx}
            img={sampleImg}
            isDisabled={false}
            percentOff={35}
            price={12}
            outdatedPrice={'13.09'}
            subImages={images}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
