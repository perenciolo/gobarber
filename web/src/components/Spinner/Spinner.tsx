import React from 'react';

import SpinnerView from './SpinnerView';

interface Props {
  bgColor?: string;
  spinnerColor?: string;
  borderWidth?: string;
  width?: string;
  height?: string;
  className?: string;
}

const Spinner: React.FC<Props> = ({
  bgColor,
  borderWidth,
  height,
  spinnerColor,
  width,
  className,
}) => {
  return (
    <SpinnerView
      bgColor={bgColor}
      borderWidth={borderWidth}
      height={height}
      spinnerColor={spinnerColor}
      width={width}
      className={className}
    />
  );
};

export default Spinner;
