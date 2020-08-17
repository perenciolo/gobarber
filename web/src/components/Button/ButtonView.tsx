import React from 'react';

import { Container } from './ButtonView.styles';

interface Props {}

const ButtonView: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ButtonView;
