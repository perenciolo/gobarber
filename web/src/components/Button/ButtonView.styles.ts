import styled, { css } from 'styled-components';
import { ButtonHTMLAttributes } from 'react';
import { shade } from 'polished';

import { theme } from '../../styles/global';
import Spinner from '../Spinner/Spinner';

type ContainerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.palette.primary};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: ${theme.palette.grey};
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  font-size: 18px;

  &:hover {
    background: ${shade(0.2, theme.palette.primary)};
  }

  ${props =>
    props.disabled &&
    css`
      background-color: ${theme.palette.grey500};
      &:hover {
        cursor: not-allowed;
        background: ${theme.palette.grey500};
      }
    `}
`;

export const CustomSpinner = styled(Spinner)`
  margin-left: 8px;
`;
