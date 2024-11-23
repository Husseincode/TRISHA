/** @format */

import React, { FC } from 'react';
import { LoadingComponentProps } from '@/app/components/Loading/types';

export const BreadCrumb: React.FC<LoadingComponentProps> = ({
  initialColor: initialColorType,
  reverseInitialColor: reverseColorType,
}) => {
  return (
    <div className='lg:w-1/3 w-[300px] min-h-[599px] slide-from-top'>
      <div
        className={`min-h-[243px] transition duration-500 bg-[#757272]`}></div>
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
            fill={initialColorType}
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
            fill={initialColorType}
            className='transition duration-500'
          />
          <rect
            y='38.7462'
            width='350'
            height='22'
            rx='11'
            fill={initialColorType}
            className='transition duration-500'
          />
          <rect
            x='35'
            y='76.584'
            width='280'
            height='22'
            rx='11'
            fill={initialColorType}
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
            fill={initialColorType}
            className='transition duration-500'
          />
          <rect
            x='40'
            y='22.03'
            width='170'
            height='25'
            rx='12'
            fill={reverseColorType}
            className='transition duration-500'
          />
        </svg>
      </div>
    </div>
  );
};

export const BreadCrumb2 = () => {
  return (
    <React.Fragment>
      <svg
        width='446'
        height='47'
        viewBox='0 0 446 47'
        fill='none'
        className='w-[300px] md:w-full slide-from-left'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='0.201385'
          width='445.602'
          height='46.4064'
          rx='12'
          fill='#ABA7A7'
        />
      </svg>

      <svg
        width='510'
        height='67'
        viewBox='0 0 510 67'
        fill='none'
        className='w-[300px] md:w-full slide-from-right'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='0.372688'
          y='0.216858'
          width='509.259'
          height='66.2949'
          rx='12'
          fill='#ABA7A7'
        />
      </svg>

      <svg
        width='192'
        height='67'
        viewBox='0 0 192 67'
        fill='none'
        className='w-[300px] md:w-full slide-from-left'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='0.51622'
          y='0.0632324'
          width='190.972'
          height='66.2949'
          rx='12'
          fill='#ABA7A7'
        />
      </svg>
      <div className='flex flex-col gap-[10px]'>
        <svg
          width='550'
          height='15'
          viewBox='0 0 550 15'
          fill='none'
          className='w-[300px] md:w-full slide-from-right'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            y='0.889709'
            width='550'
            height='13.259'
            rx='6.62949'
            fill='#ABA7A7'
          />
        </svg>
        <svg
          width='550'
          height='15'
          viewBox='0 0 550 15'
          fill='none'
          className='w-[300px] md:w-full slide-from-left'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            y='0.889709'
            width='550'
            height='13.259'
            rx='6.62949'
            fill='#ABA7A7'
          />
        </svg>
        <svg
          width='550'
          height='15'
          viewBox='0 0 550 15'
          fill='none'
          className='w-[300px] md:w-full slide-from-right'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            y='0.889709'
            width='550'
            height='13.259'
            rx='6.62949'
            fill='#ABA7A7'
          />
        </svg>
      </div>

      <svg
        width='510'
        height='100'
        viewBox='0 0 510 100'
        fill='none'
        className='w-[300px] md:w-full slide-from-left'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='0.372688'
          y='0.557617'
          width='509.259'
          height='99.4424'
          rx='12'
          fill='#ABA7A7'
        />
        <rect
          x='55.5116'
          y='26.0818'
          width='400'
          height='40'
          rx='12'
          fill='#757272'
        />
      </svg>
    </React.Fragment>
  );
};

export const BreadCrumb3: React.FC<LoadingComponentProps> = ({
  initialColor: initialColorType,
  reverseInitialColor: reverseColorType,
}) => {
  return (
    <svg
      width='430'
      height='700'
      viewBox='0 0 430 700'
      fill='none'
      className='lg:w-1/3 w-full'
      xmlns='http://www.w3.org/2000/svg'>
      <rect width='430' height='700' fill={reverseColorType} />
      <rect
        width='80'
        height='30'
        transform='translate(35 48)'
        className='transition duration-500'
        fill={initialColorType}
      />
      <rect
        width='60'
        height='10'
        transform='translate(45 59)'
        className='transition duration-500'
        fill={reverseColorType}
      />
      <rect
        width='80'
        height='30'
        transform='translate(35 48)'
        className='transition duration-500'
        fill={initialColorType}
      />
      <rect
        width='60'
        height='10'
        transform='translate(45 59)'
        className='transition duration-500'
        fill={reverseColorType}
      />
      <rect
        width='210'
        height='22'
        transform='translate(110 461)'
        className='transition duration-500'
        fill={initialColorType}
      />
      <rect
        width='100'
        height='30'
        transform='translate(108 511)'
        className='transition duration-500'
        fill={initialColorType}
      />
      <rect
        width='80'
        height='20'
        transform='translate(231 522)'
        className='transition duration-500'
        fill={initialColorType}
      />
      <circle
        cx='152'
        cy='597'
        r='20'
        fill={initialColorType}
        className='transition duration-500'
      />
      <circle
        cx='214'
        cy='597'
        r='20'
        fill={initialColorType}
        className='transition duration-500'
      />
      <circle
        cx='275'
        cy='597'
        r='20'
        fill={initialColorType}
        className='transition duration-500'
      />
    </svg>
  );
};

export const BreadCrumb4: React.FC<LoadingComponentProps> = ({
  initialColor: initialColorType,
  reverseInitialColor: reverseColorType,
}) => {
  return (
    <svg
      width='430'
      height='700'
      viewBox='0 0 430 700'
      fill='none'
      className=' w-full'
      xmlns='http://www.w3.org/2000/svg'>
      <rect width='430' height='700' fill={reverseColorType} />
      <rect
        width='80'
        height='30'
        transform='translate(35 48)'
        className='transition duration-500'
        fill={initialColorType}
      />
      <rect
        width='60'
        height='10'
        transform='translate(45 59)'
        className='transition duration-500'
        fill={reverseColorType}
      />
      <rect
        width='80'
        height='30'
        transform='translate(35 48)'
        className='transition duration-500'
        fill={initialColorType}
      />
      <rect
        width='60'
        height='10'
        transform='translate(45 59)'
        className='transition duration-500'
        fill={reverseColorType}
      />
      <rect
        width='210'
        height='22'
        transform='translate(110 461)'
        className='transition duration-500'
        fill={initialColorType}
      />
      <rect
        width='100'
        height='30'
        transform='translate(108 511)'
        className='transition duration-500'
        fill={initialColorType}
      />
      <rect
        width='80'
        height='20'
        transform='translate(231 522)'
        className='transition duration-500'
        fill={initialColorType}
      />
      <circle
        cx='152'
        cy='597'
        r='20'
        fill={initialColorType}
        className='transition duration-500'
      />
      <circle
        cx='214'
        cy='597'
        r='20'
        fill={initialColorType}
        className='transition duration-500'
      />
      <circle
        cx='275'
        cy='597'
        r='20'
        fill={initialColorType}
        className='transition duration-500'
      />
    </svg>
  );
};

export const Card: FC<LoadingComponentProps> = ({
  initialColor,
  reverseInitialColor,
}) => {
  return (
    <svg
      width='400'
      height='700'
      viewBox='0 0 400 700'
      fill='none'
      className='lg:w-1/3 w-full'
      xmlns='http://www.w3.org/2000/svg'>
      <rect
        width='352.381'
        height='19.1257'
        transform='translate(25.7143 346.175)'
        className='transition duration-500'
        fill={reverseInitialColor}
      />
      <rect
        width='219.048'
        height='19.1257'
        transform='translate(92.381 384.426)'
        className='transition duration-500'
        fill={reverseInitialColor}
      />
      <rect
        width='304.762'
        height='33.4699'
        transform='translate(44.7619 441.804)'
        className='transition duration-500'
        fill={reverseInitialColor}
      />
      <rect
        width='352.381'
        height='21.0383'
        transform='translate(25.7143 499.18)'
        className='transition duration-500'
        fill={reverseInitialColor}
      />
      <rect
        width='380.952'
        height='21.0383'
        transform='translate(6.66669 537.431)'
        className='transition duration-500'
        fill={reverseInitialColor}
      />
      <rect
        width='219.048'
        height='21.0383'
        transform='translate(92.381 575.683)'
        className='transition duration-500'
        fill={reverseInitialColor}
      />
      <rect
        width='238.095'
        height='66.9399'
        transform='translate(82.8571 633.06)'
        className='transition duration-500'
        fill={reverseInitialColor}
      />
      <rect
        width='158.73'
        height='20.082'
        transform='translate(122.54 656.488)'
        className='transition duration-500'
        fill={initialColor}
      />
      <rect width='400' height='306.011' fill='#757272' />
    </svg>
  );
};

export const UnitCard = () => {
  return (
    <svg
      width='342'
      height='120'
      viewBox='0 0 342 120'
      fill='none'
      className='w-full lg:w-1/3'
      xmlns='http://www.w3.org/2000/svg'>
      <rect width='71' height='120' fill='#757272' />
      <rect width='246' height='25' transform='translate(96)' fill='#757272' />
      <rect
        width='220'
        height='20'
        transform='translate(96 70)'
        fill='#757272'
      />
      <rect
        width='230'
        height='20'
        transform='translate(96 100)'
        fill='#757272'
      />
    </svg>
  );
};
