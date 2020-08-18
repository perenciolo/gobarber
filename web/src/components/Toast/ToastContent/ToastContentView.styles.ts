import styled, { css } from 'styled-components';
import { theme } from '../../../styles/global';
import { animated } from 'react-spring';

interface ContentProps {
  type?: 'info' | 'success' | 'alert' | 'warning';
}

const ToastCss = {
  info: css`
    background: ${theme.palette.info};
    color: ${theme.palette.infoAccent};
  `,
  success: css`
    background: ${theme.palette.success};
    color: ${theme.palette.successAccent};
  `,
  alert: css`
    background: ${theme.palette.alert};
    color: ${theme.palette.alertAccent};
  `,
  warning: css`
    background: ${theme.palette.warning};
    color: ${theme.palette.warningAccent};
  `,
};

export const Content = styled(animated.div)<ContentProps>`
  display: flex;
  position: relative;
  width: 22.5rem;
  padding: 1rem 2rem 1rem 1rem;
  border-radius: 10px;
  ${({ type }) => ToastCss[type || 'info']}
  box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 0.5rem;
  }

  > svg {
    margin: 0 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    place-items: center;
  }
`;
