import styled, { css } from 'styled-components';

import { theme } from '../../styles/global';

interface ContainerProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  opacity: 0;
  transition: opacity 0.4s;
  visibility: hidden;

  ${props =>
    props.show &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

interface ContentProps {
  color?: string;
  textColor?: string;
}

export const Content = styled.div<ContentProps>`
  position: absolute;
  color: ${props => (props.textColor ? props.textColor : theme.palette.black)};
  width: 20rem;
  word-break: break-word;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%);
  background-color: ${props =>
    props.color ? props.color : theme.palette.primary};
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;

  &::before {
    content: '';
    border-style: solid;
    border-color: ${props =>
        props.color ? props.color : theme.palette.primary}
      transparent;
    border-width: 6px 6px 0 6px;
    top: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-100%);
  }
`;
