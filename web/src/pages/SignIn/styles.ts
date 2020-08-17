import styled from 'styled-components';
import { shade } from 'polished';

import signinbg from '../../assets/sign-in-background.png';

import { theme } from '../../styles/global';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: strech;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 0.5rem 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      display: block;
      color: ${theme.palette.white};
      text-decoration: none;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, theme.palette.white)};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    color: ${theme.palette.primary};
    text-decoration: none;
    margin-top: 24px;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, theme.palette.primary)};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

interface BackgroundProps {
  bg?: string;
}

export const Background = styled.div<BackgroundProps>`
  flex: 1;
  background: url(${({ bg }) => bg || signinbg}) no-repeat center/cover;
`;
