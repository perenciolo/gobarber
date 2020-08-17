import React from 'react';

import { Container, Error } from './InputView.styles';
import { IconBaseProps } from 'react-icons/lib';
import { FiInfo } from 'react-icons/fi';

import Tooltip from '../Tooltip/Tooltip';
import { theme } from '../../styles/global';

interface Props {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  isFocused: boolean;
  isFilled: boolean;
  showTooltip: boolean;
  toggleTooltip: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
  error: string | undefined;
  isErrored: boolean;
}

const InputView: React.FC<Props> = ({
  icon: Icon,
  name,
  inputRef,
  onFocus,
  onBlur,
  isFocused,
  isFilled,
  isErrored,
  showTooltip,
  toggleTooltip,
  error,
  ...rest
}) => {
  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={isErrored}>
      {Icon && <Icon size={20} />}
      <input
        ref={inputRef}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
        {...rest}
      />
      {isErrored && (
        <Error>
          <Tooltip show={showTooltip} color={theme.palette.danger}>
            {error}
          </Tooltip>
          <FiInfo
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
            size={20}
          />
        </Error>
      )}
    </Container>
  );
};

export default InputView;
