/** @format */

import { StaticImageData } from 'next/image';
import twitterIcon from '../svgs/x.svg';
import facebookIcon from '../svgs/facebook.svg';
import instagramIcon from '../svgs/instagram.svg';
import whatsappIcon from '../svgs/whatsapp.svg';
import visaIcon from '../svgs/visa.svg';
import mastercardIcon from '../svgs/mastercard.svg';
import amexIcon from '../svgs/amex.svg';
import pIcon from '../svgs/p.svg';
import switchIcon from '../svgs/switch.svg';
import discoverIcon from '../svgs/discover.svg';

export const data: { image: StaticImageData; name: string; url: string }[] = [
  {
    image: twitterIcon,
    name: 'Twitter',
    url: '',
  },
  {
    image: facebookIcon,
    name: 'Facebook',
    url: '',
  },
  {
    image: whatsappIcon,
    name: 'Whatsapp',
    url: '',
  },
  {
    image: instagramIcon,
    name: 'Instagram',
    url: '',
  },
];

export const help: { name: string; url: string }[] = [
  {
    name: 'Search',
    url: '#',
  },
  {
    name: 'Help',
    url: '#',
  },
  {
    name: 'Information',
    url: '#',
  },
  {
    name: 'Privacy Policy',
    url: '#',
  },
  {
    name: 'Shipping Details',
    url: '#',
  },
];

export const support: { name: string; url: string }[] = [
  {
    name: 'Contact',
    url: '#',
  },
  {
    name: 'About',
    url: '#',
  },
  {
    name: 'Careers',
    url: '#',
  },
  {
    name: 'Refunds and Returns',
    url: '#',
  },
  {
    name: 'Deliveries',
    url: '#',
  },
];

export const information: { name: string; url: string }[] = [
  {
    name: 'Search Terms',
    url: '#',
  },
  {
    name: 'Advanced Search',
    url: '#',
  },
  {
    name: `Help and Faq's`,
    url: '#',
  },
  {
    name: 'Store Location',
    url: '#',
  },
  {
    name: 'Orders and Returns',
    url: '#',
  },
];

export const cards: { name: string; image: StaticImageData }[] = [
  {
    name: 'Visa',
    image: visaIcon,
  },
  {
    name: 'Mastercard',
    image: mastercardIcon,
  },
  {
    name: 'Amex',
    image: amexIcon,
  },
  {
    name: 'P',
    image: pIcon,
  },
  {
    name: 'Switch',
    image: switchIcon,
  },
  {
    name: 'Discover',
    image: discoverIcon,
  },
];
