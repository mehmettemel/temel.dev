import React, { ReactNode } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string; // default, primary, info, success, warning, danger, dark
  size?: string; // sm, md, lg
  disabled?: boolean;
}
const ButtonSimple: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  disabled,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...rest}
      className={
        `inline-block ${size} text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring` +
        (disabled ? 'disabled' : '')
      }
    >
      {children}
    </button>
  );
};

export default ButtonSimple;
