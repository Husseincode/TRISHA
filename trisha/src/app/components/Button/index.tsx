/** @format */

import React, { FC } from 'react';

interface ButtonProps {
  text: string;
  title?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string | undefined;
}
const Button: FC<ButtonProps> = ({
  text,
  title,
  onClick,
  isDisabled,
  className,
  style,
  id,
}) => {
  return (
    <button
      type='button'
      id={id}
      style={style}
      className={`${className} bg-[#212529] text-[#FFFFFF] rounded-[12px] gap-[10px]`}
      title={title ? title : text}
      onClick={isDisabled ? undefined : onClick}>
      {text}
    </button>
  );
};

export default Button;
