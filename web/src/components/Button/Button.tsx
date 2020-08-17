import React, { ButtonHTMLAttributes } from 'react';

import ButtonView from './ButtonView';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return <ButtonView {...rest}>{children}</ButtonView>;
};

export default Button;
