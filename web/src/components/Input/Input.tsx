import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';

import InputView from './InputView';
import { IconBaseProps } from 'react-icons/lib';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  error: string | undefined;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  isFocused: boolean;
  isFilled: boolean;
}

const Input: React.FC<Props> = props => {
  const [showTooltip, setShowTooltip] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleShowTooltip = useCallback(
    (event: React.MouseEvent<SVGElement, MouseEvent>) => {
      setShowTooltip(event.type === 'mouseenter' ? true : false);
    },
    [],
  );

  return (
    <InputView
      inputRef={inputRef}
      showTooltip={showTooltip}
      toggleTooltip={handleShowTooltip}
      {...props}
    />
  );
};

export default Input;
