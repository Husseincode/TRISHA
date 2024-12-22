/** @format */

import React, { useEffect, useRef } from 'react';
import './styles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useVisibility } from '../Ref/ref';

const SectionComp10 = () => {
  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email(),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  const textRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const anotherTextRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLLabelElement>(null);

  const isTextVisible = useVisibility(textRef);
  const isHeadingVisible = useVisibility(headingRef);
  const isAnotherTextVisible = useVisibility(anotherTextRef);
  const isInputVisible = useVisibility(inputRef);

  useEffect(() => {
    const handleError = () => {
      if (formik.errors.email) {
        toast.error(formik.errors.email as string, {
          style: {
            background: '#000000',
            color: '#ffffff',
          },
        });
      }
    };
    handleError();
  }, [formik.errors.email]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='min-h-[500px] seccomp10BG flex items-center justify-center md:py-[80px] md:px-[30px] py-[51px] px-[37px] bg-[#757272] w-full'>
      <div className='container flex flex-col items-center justify-center gap-[15px] min-h-[250px]'>
        <span
          ref={textRef}
          className={`font-bold lg:text-[24px] text-[22px] leading-[24px] lg:leading-[29px] text-center text-[#FFFFFF] ${
            isTextVisible && 'slide-from-left'
          }`}>
          Special Offer for subscription
        </span>
        <h2
          ref={headingRef}
          className={`font-black lg:text-[48px] md:text-[40px] md:leading-[48px] text-[35px] leading-[36px] lg:leading-[58px] text-center text-[#008080] ${
            isHeadingVisible && 'slide-from-right'
          }`}>
          To Get Instant Discount!
        </h2>
        <span
          ref={anotherTextRef}
          className={`font-normal lg:text-[18px] lg:leading-[22px] text-base leading-[20px] text-center text-[#FFFFFF] lg:w-[780px] ${
            isAnotherTextVisible && 'slide-from-left'
          }`}>
          Discount For All Orders Over $100 We&apos;re at 71% of our goal! We
          are always willing to make our customers happy and are ready to
          support your most bold and creative ideas in hairstyle and hair
          coloring!
        </span>
        <label
          htmlFor='email'
          ref={inputRef}
          className={`min-h-[49px] w-full md:w-[600px] xl:w-[601px] border-[1px] border-[#EEEEEE80] border-r-0 mt-[10px] ${
            isInputVisible && 'slide-from-right'
          }`}>
          <input
            title='email'
            type='email'
            name='email'
            id='email'
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            style={{ background: 'transparent' }}
            placeholder='Email Address'
            className='h-[46px] w-[50%] md:min-w-[440px] outline-none pl-[10px] md:pl-[25px] text-[18px] leading-[22px] text-[#FFFFFF80]'
          />
          <button
            type='submit'
            title='Subscribe'
            className='md:w-[158px] w-[50%] py-[12px] px-[12px] bg-[#008080] border-[#EEEEEE80] border-r-[1px] font-medium text-[#FFFFFF] text-[20px] leading-[24px]'>
            Subscribe
          </button>
        </label>
      </div>
    </form>
  );
};

export default SectionComp10;
