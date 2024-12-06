/** @format */

import React from 'react';

interface ViewCollectionButtonProps {
  className?: string;
  title?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  text?: string;
  isVisible?: boolean;
  animationStyle?: string;
}

const ViewCollectionButton = ({
  onClick,
  isVisible,
  animationStyle,
  text,
  type,
  isDisabled,

  title,
}: ViewCollectionButtonProps) => {
  return (
    <button
      type={type ? type : 'button'}
      title={title ? title : 'View Collections'}
      onClick={isDisabled ? undefined : onClick}
      className={`lg:h-[46px] h-[43px] lg:w-[240px] py-[12px] px-[48px] gap-[10px] bg-[#008080] hover:bg-[#104b4b] text-[#FFFFFF] text-[16px] lg:text-[18px] leading-[22px] text-center mt-6 transition duration-500 font-medium ${
        isVisible && animationStyle
      }`}>
      {text ? text : 'View Collections'}
    </button>
  );
};

export default ViewCollectionButton;
