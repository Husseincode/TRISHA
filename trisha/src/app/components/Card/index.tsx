/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Image, { StaticImageData } from 'next/image';
import React, { FC, useEffect, useState } from 'react';

interface CardProps {
  className?: string;
  onClick?: () => void;
  img: any;
  isDisabled: boolean;
  percentOff: number;
  price: number | string;
  outdatedPrice: number | string;
  subImages: {
    img1: StaticImageData | string;
    img2: StaticImageData | string;
    img3: StaticImageData | string;
  };
  text: string;
  title?: string;
  ref?: React.RefObject<HTMLDivElement>;
  wholeHeight?: string;
  imageHeight?: string;
  imageContainer?: string;
}

const Card: FC<CardProps> = ({
  className,
  onClick,
  img,
  percentOff,
  price,
  outdatedPrice,
  subImages: { img1, img2, img3 },
  text,
  title,
  ref,
  wholeHeight,
  imageHeight,
  imageContainer,
}) => {
  const [currentImg, setCurrentImg] = useState(img);
  const [transitionTracker, setTransitionTracker] = useState<boolean>(false);
  const [imgsArr, setImgsArr] = useState([img1, img2, img3]);
  const [index, setIndex] = useState<number>(0);
  const [swipes, setSwipes] = useState({
    isSwipeLeft: false,
    isSwipeRight: false,
  });
  const [swipeData, setSwipeData] = useState({
    startX: 0,
    endX: 0,
  });

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = event.touches[0].clientX;
    setSwipeData({ startX, endX: 0 });
    setSwipes({
      isSwipeLeft: false,
      isSwipeRight: false,
    });
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const endX = event.touches[0].clientX;
    setSwipeData({ ...swipeData, endX });
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const { startX, endX } = swipeData;
    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        setSwipes({ isSwipeLeft: false, isSwipeRight: true });
        console.log('Swiped Right');
      } else {
        setSwipes({ isSwipeLeft: true, isSwipeRight: false });
        console.log('Swiped Left');
      }
    } else {
      console.log('Swipe not detected or too short');
    }
  };

  useEffect(() => {
    const changeImage = () => {
      const max = imgsArr.length - 1;

      setIndex((prevIndex: number) => {
        return prevIndex + 1;
      });
      if (index === max) {
        setIndex(0);
        setTransitionTracker(false);
      }
      //console.log(index);
      setCurrentImg(imgsArr[index]);
      setTransitionTracker(true);
      setTimeout(() => {
        setTransitionTracker(false);
      }, 1000);
    };
    const intervalID = setInterval(changeImage, 5000);
    return () => clearInterval(intervalID);
  }, [index]);

  useEffect(() => {
    const max = imgsArr.length;

    if (swipes.isSwipeLeft) {
      setIndex((prevIndex: number) => prevIndex + 1);
      setCurrentImg(imgsArr[index]);
    }
    if (swipes.isSwipeRight) {
      setIndex((prevIndex: number) => prevIndex - 1);
      setCurrentImg(imgsArr[index]);
    }
    if (index === max) {
      setIndex(0);
      setTransitionTracker(false);
    }
  }, [swipes]);

  return (
    <div
      title={title}
      ref={ref}
      onClick={onClick}
      className={`${wholeHeight} cursor-pointer w-full border-[9px] hover:border-[1px] py-[40px] px-[20px] gap-[20px] border-[#DAE3EB] flex flex-col transition-all duration-500 ${className}`}>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`w-full ${imageContainer} flex flex-col gap-[2px] overflow-hidden`}>
        <button
          type='button'
          className='h-[28px] w-fit text-white py-[5px] px-[10px] gap-[10px] bg-[#008080] font-medium text-[15px] leading-[18px] text-center'>
          OFF {percentOff}%
        </button>
        <Image
          src={currentImg}
          height={416}
          width={367}
          style={{
            transitionBehavior: 'allow-discrete',
            transition: 'ease-in-out',
          }}
          className={`${imageHeight} ${
            transitionTracker && 'slide-from-right'
          } w-full transition-all duration-500 lg:w-[367px]`}
          alt=''
        />
      </div>
      <div className='lg:h-[34px] w-full flex justify-center items-center'>
        <span className='font-normal lg:text-[20px] lg:leading-[33px] text-center text-[#008080]'>
          {text}
        </span>
      </div>
      <div className='lg:h-[24px] w-full flex items-center justify-center'>
        <span className='drop-shadow-md '>
          ${' '}
          <span className='font-normal lg:text-[20px] leading-[24px] text-[#212529]'>
            {price}
          </span>{' '}
          <span className='line-through font-[300px] text-[12px] leading-[14px] text-[#535B64]'>
            ${outdatedPrice}
          </span>
        </span>
      </div>
      <div className='lg:h-[24px] w-full flex items-center justify-center'>
        <div className='flex gap-[10px]'>
          <div className='h-[36px] w-[36px] cursor-pointer'>
            <Image
              src={img1}
              alt=''
              onClick={() => {
                setCurrentImg(img1);
              }}
              className='w-[36px] h-[36px] rounded-full border-[1px] border-[#DAE3EB]'
            />
          </div>

          <div className='h-[36px] w-[36px] cursor-pointer'>
            <Image
              src={img2}
              alt=''
              onClick={() => {
                setCurrentImg(img2);
              }}
              className='w-[36px] h-[36px] rounded-full border-[1px] border-red-600'
            />
          </div>

          <div className='h-[36px] w-[36px] cursor-pointer'>
            <Image
              src={img3}
              alt=''
              onClick={() => {
                setCurrentImg(img3);
              }}
              className='w-[36px] h-[36px] rounded-full border-[1px] border-zinc-800'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
