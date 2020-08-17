import React, { ButtonHTMLAttributes } from 'react';

import { Container, CustomSpinner } from './ButtonView.styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const ButtonView: React.FC<Props> = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      {children}
      {loading && (
        <CustomSpinner width="16px" height="16px" borderWidth="2px" />
      )}
    </Container>
  );
};

export default ButtonView;
