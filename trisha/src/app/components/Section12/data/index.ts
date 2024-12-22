/** @format */

import { StaticImageData } from 'next/image';
import planeIcon from '@/app/components/Section12/ReUse/svgs/plane.svg';
import magicIcon from '@/app/components/Section12/ReUse/svgs/magic.svg';
import headphoneIcon from '@/app/components/Section12/ReUse/svgs/headphone.svg';

export const data: { image: StaticImageData; heading: string; text: string }[] =
  [
    {
      heading: 'Free Home Delivery',
      image: planeIcon,
      text: `We deliver to enhance customer convenience and satisfaction!`,
    },
    {
      heading: 'Quality Product',
      image: magicIcon,
      text: `Our wigs are crafted with the highest quality materials to ensure a natural look and comfortable fit.`,
    },
    {
      heading: 'Online Support',
      image: headphoneIcon,
      text: `Our online support team is dedicated to helping you find the perfect wig.`,
    },
  ];
