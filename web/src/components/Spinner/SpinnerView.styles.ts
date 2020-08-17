import styled from 'styled-components';
import { theme } from '../../styles/global';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SpinnerProps {
  bgColor?: string;
  spinnerColor?: string;
  borderWidth?: string;
  width?: string;
  height?: string;
}

export const Spinner = styled.div<SpinnerProps>`
  border: ${({ borderWidth }) => borderWidth || '8px'} solid
    ${({ bgColor }) => bgColor || theme.palette.grey};
  border-left-color: ${({ spinnerColor }) =>
    spinnerColor || theme.palette.primary};
  border-radius: 50%;
  width: ${({ width }) => width || '100px'};
  height: ${({ height }) => height || '100px'};
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
