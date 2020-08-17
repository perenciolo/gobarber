import React from 'react';
import { Container, Spinner } from './SpinnerView.styles';

interface Props {
  bgColor?: string;
  spinnerColor?: string;
  borderWidth?: string;
  width?: string;
  height?: string;
  className?: string;
}

const SpinnerView: React.FC<Props> = ({
  bgColor,
  borderWidth,
  height,
  spinnerColor,
  width,
  className,
}) => {
  return (
    <Container>
      <Spinner
        bgColor={bgColor}
        borderWidth={borderWidth}
        height={height}
        spinnerColor={spinnerColor}
        width={width}
        className={className}
      />
    </Container>
  );
};

export default SpinnerView;
