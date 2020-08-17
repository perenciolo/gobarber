import styled, { css } from 'styled-components';

import { theme } from '../../styles/global';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  // isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  & + div {
    margin-top: 8px;
  }
  display: flex;
  align-items: center;
  background: ${theme.palette.black};
  border-radius: 10px;
  border: 2px solid ${theme.palette.black};
  padding: 16px;
  width: 100%;
  color: ${theme.palette.white};

  input {
    flex: 1;
    background: transparent;
    color: inherit;
    border: 0;

    &::placeholder {
      color: ${theme.palette.grey500};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      flex: 1;
      border: 1px solid ${theme.palette.black};
      -webkit-text-fill-color: ${theme.palette.white};
      box-shadow: 0 0 0px 1000px ${theme.palette.black} inset;
      -webkit-box-shadow: 0 0 0px 1000px ${theme.palette.black} inset;
      transition: background-color 5000s ease-in-out 0s;
      ${props =>
        props.isFilled &&
        css`
          -webkit-text-fill-color: ${theme.palette.primary};
        `}
    }
  }

  svg {
    margin-right: 16px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: ${theme.palette.primary};
      border-color: ${theme.palette.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${theme.palette.primary};
    `}
`;

export const Error = styled.div`
  margin-left: 16px;
  color: ${theme.palette.danger};
  position: relative;
`;
