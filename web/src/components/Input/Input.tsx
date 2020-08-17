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
}

const Input: React.FC<Props> = props => {
  const [isFocused, setIsFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(event.currentTarget.name === inputRef.current?.name);
    },
    [inputRef],
  );

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleShowTooltip = useCallback(
    (event: React.MouseEvent<SVGElement, MouseEvent>) => {
      setShowTooltip(event.type === 'mouseenter' ? true : false);
    },
    [],
  );

  return (
    <InputView
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      inputRef={inputRef}
      isFocused={isFocused}
      isFilled={isFilled}
      showTooltip={showTooltip}
      toggleTooltip={handleShowTooltip}
      hasError={false}
      {...props}
    />
  );
};

export default Input;
