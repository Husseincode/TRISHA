/** @format */

import { StaticImageData } from 'next/image';
import img1 from '@/assets/Trisha/Trisha/blog7.jpg';
import img2 from '@/assets/Trisha/Trisha/blog8.jpg';
import img3 from '@/assets/Trisha/Trisha/blog9.jpg';

export const data: {
  heading: string;
  description: string;
  img: StaticImageData;
  ramM: string;
  date: string;
  noOfComments: number;
}[] = [
  {
    heading: 'Become A Fashion Model',
    description: `To become a fashion model, focus on building your portfolio, networking, and refining your skills. Here’s a quick guide`,
    img: img1,
    ramM: 'Ram M',
    date: 'October 25, 2024',
    noOfComments: 2,
  },
  {
    heading: 'How To Curl Hair With a Flat Iron',
    description: `Curling hair with a flat iron can give you beauty, long lasting curls! With a little practice you will get the hang of it!`,
    img: img2,
    ramM: 'Ram M',
    date: 'October 25, 2024',
    noOfComments: 2,
  },
  {
    heading: '12 Helment Hair Styles',
    description: `Low bun, Low pony tail, Braided Ponytail, French braids, Double braids, Side braid, Fish tail braid, Milk maid Braids e.t.c`,
    img: img3,
    ramM: 'Ram M',
    date: 'October 25, 2024',
    noOfComments: 1,
  },
];
