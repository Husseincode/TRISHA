/** @format */

import React, { FC } from 'react';
import { BreadCrumb3 } from '@/app/components/Loading/breadcrumbs';
import { LoadingComponentProps } from '@/app/components/Loading/types';

const Section5: FC<LoadingComponentProps> = ({
  initialColor,
  reverseInitialColor,
}) => {
  return (
    <div className='flex flex-col md:flex-row slide-from-left min-h-[800px] gap-x-[20px] md:gap-x-[43px] px-[50px]'>
      {Array.from({ length: 3 }).map((__, idx: number) => {
        return (
          <BreadCrumb3
            key={idx}
            initialColor={initialColor}
            reverseInitialColor={reverseInitialColor}
          />
        );
      })}
    </div>
  );
};

export default Section5;
