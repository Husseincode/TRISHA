/** @format */

import sampleImg from '@/assets/Trisha/Trisha/product8.jpg';
import sampleImg2 from '@/assets/Trisha/Trisha/product13_dd958600-40d6-443d-8802-affad4dbfa69.jpg';
import sampleImg3 from '@/assets/Trisha/Trisha/product2_7b509ba1-0bbf-4042-99d9-bcc4b3eee49b.jpg';
import subImg1 from '@/assets/Trisha/Trisha/product1.jpg';
import subImg2 from '@/assets/Trisha/Trisha/product7.jpg';
import subImg3 from '@/assets/Trisha/Trisha/product5.jpg';
import subImg4 from '@/assets/Trisha/Trisha/product8.jpg';
import subImg5 from '@/assets/Trisha/Trisha/product11_06573907-ed28-427d-9b95-72755825c76e_2000x_1.jpg';
import longHair from '@/assets/Trisha/Trisha/longyHair.jpg';
import sensual from '@/assets/Trisha/Trisha/sensual.jpg';
import Golden from '@/assets/Trisha/Trisha/Golden.jpg';
import HairJet from '@/assets/Trisha/Trisha/HairJet.jpg';
import LongHairGoldenWig from '@/assets/Trisha/Trisha/LongHairGoldenWig.jpg';
import RedHair from '@/assets/Trisha/Trisha/RedHairStyleWig.jpg';
import StraightHairWig from '@/assets/Trisha/Trisha/StraightHairWig.jpg';

export const data = [
  {
    showImg: sampleImg3,
    images: { img1: sampleImg3, img2: HairJet, img3: subImg4 },
    percentOff: 11,
    price: 12.15,
    outdatedPrice: '13.09',
    text: 'Curly Brown Wig',
  },
  {
    showImg: longHair,
    images: { img1: longHair, img2: subImg1, img3: subImg5 },
    percentOff: 17,
    price: 8.03,
    outdatedPrice: '9.09',
    text: 'Blonde Hair wig',
  },
  {
    showImg: sensual,
    images: { img1: sensual, img2: subImg2, img3: HairJet },
    percentOff: 17,
    price: 6.78,
    outdatedPrice: '8.00',
    text: 'Sensual Touch Hair',
  },

  {
    showImg: Golden,
    images: { img1: Golden, img2: subImg3, img3: sensual },
    percentOff: 15,
    price: 6.78,
    outdatedPrice: '8.00',
    text: 'Golden Brown Hair',
  },
  {
    showImg: HairJet,
    images: { img1: HairJet, img2: HairJet, img3: HairJet },
    percentOff: 11,
    price: 12.15,
    outdatedPrice: '13.09',
    text: 'Long Hair Jet Black',
  },
  {
    showImg: LongHairGoldenWig,
    images: { img1: LongHairGoldenWig, img2: sampleImg2, img3: sampleImg3 },
    percentOff: 17,
    price: 8.03,
    outdatedPrice: '9.09',
    text: 'Long Hair Golden Wig',
  },
  {
    showImg: RedHair,
    images: { img1: RedHair, img2: subImg5, img3: sensual },
    percentOff: 15,
    price: 6.78,
    outdatedPrice: '8.00',
    text: 'Red Hair Style Wig',
  },
  {
    showImg: StraightHairWig,
    images: { img1: StraightHairWig, img2: sampleImg, img3: subImg2 },
    percentOff: 15,
    price: 6.78,
    outdatedPrice: '8.00',
    text: 'Straight Hair Wig',
  },
];
