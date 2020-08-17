import React, { ButtonHTMLAttributes } from 'react';
import ButtonView from './ButtonView';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<Props> = ({ children }) => {
  return <ButtonView>{children}</ButtonView>;
};

export default Button;
