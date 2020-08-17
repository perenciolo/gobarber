import React from 'react';

import TooltipView from './TooltipView';

interface Props {
  show: boolean;
  color?: string;
  textColor?: string;
}

const Tooltip: React.FC<Props> = ({ children, show, color, textColor }) => {
  return (
    <TooltipView show={show} color={color} textColor={textColor}>
      {children}
    </TooltipView>
  );
};

export default Tooltip;
