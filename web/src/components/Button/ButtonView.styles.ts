import styled from 'styled-components';
import { shade } from 'polished';

import { theme } from '../../styles/global';

export const Container = styled.button`
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
`;
