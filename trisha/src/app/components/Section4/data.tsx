/** @format */

import sampleImg from '@/assets/Trisha/Trisha/product8.jpg';
import sampleImg2 from '@/assets/Trisha/Trisha/product13_dd958600-40d6-443d-8802-affad4dbfa69.jpg';
import sampleImg3 from '@/assets/Trisha/Trisha/product2_7b509ba1-0bbf-4042-99d9-bcc4b3eee49b.jpg';
import subImg1 from '@/assets/Trisha/Trisha/product1.jpg';
import subImg2 from '@/assets/Trisha/Trisha/product7.jpg';
import subImg3 from '@/assets/Trisha/Trisha/product5.jpg';
import subImg4 from '@/assets/Trisha/Trisha/product8.jpg';
import subImg5 from '@/assets/Trisha/Trisha/longyHair.jpg';

export const data = [
  {
    showImg: sampleImg,
    images: { img1: subImg4, img2: subImg3, img3: subImg5 },
    percentOff: 11,
    price: 12,
    outdatedPrice: '13.09',
    text: 'Blonde Hair wig',
  },
  {
    showImg: sampleImg2,
    images: { img1: subImg1, img2: subImg2, img3: subImg3 },
    percentOff: 17,
    price: 8.03,
    outdatedPrice: '9.09',
    text: 'Blonde Human Hair',
  },
  {
    showImg: sampleImg3,
    images: { img1: subImg5, img2: subImg3, img3: subImg4 },
    percentOff: 15,
    price: 6.78,
    outdatedPrice: '8.00',
    text: 'Brown Silky Hair',
  },
];
