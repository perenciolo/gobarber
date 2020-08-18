import React from 'react';
import { UseTransitionResult } from 'react-spring';

import { Container } from './ToastView.styles';
import { ToastMessage } from '../../hooks/Toast/Toast';
import ToastContent from './ToastContent/ToastContent';

interface Props {
  messages: UseTransitionResult<ToastMessage, any>[];
  onDismiss(id: string): void;
}

const ToastView: React.FC<Props> = ({ messages, onDismiss }) => {
  return (
    <Container>
      {messages.map(({ item, key, props }) => (
        <React.Fragment key={key}>
          <ToastContent message={item} style={props} onDismiss={onDismiss} />
        </React.Fragment>
      ))}
    </Container>
  );
};

export default ToastView;
