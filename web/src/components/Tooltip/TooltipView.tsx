import React from 'react';
import { Container, Content } from './TooltipView.styles';

interface Props {
  show: boolean;
  color?: string;
  textColor?: string;
}

const TooltipView: React.FC<Props> = ({ children, show, color, textColor }) => {
  return (
    <Container show={show}>
      <Content color={color} textColor={textColor}>
        {children}
      </Content>
    </Container>
  );
};

export default TooltipView;
