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
  ref?: React.RefObject<HTMLButtonElement>;
}
const Button: FC<ButtonProps> = ({
  text,
  title,
  onClick,
  isDisabled,
  className,
  style,
  id,
  ref,
}) => {
  return (
    <button
      ref={ref}
      type='button'
      id={id}
      style={style}
      className={`${className}`}
      title={title ? title : text}
      onClick={isDisabled ? undefined : onClick}>
      {text}
    </button>
  );
};

export default Button;
