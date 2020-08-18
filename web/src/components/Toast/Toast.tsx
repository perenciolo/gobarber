import React from 'react';
import { useTransition } from 'react-spring';

import ToastView from './ToastView';
import { ToastMessage, useToast } from '../../hooks/Toast/Toast';

interface Props {
  messages: ToastMessage[];
}

const Toast: React.FC<Props> = ({ messages }) => {
  const { removeToast } = useToast();
  const messagesWithTansitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <ToastView onDismiss={removeToast} messages={messagesWithTansitions} />
  );
};

export default Toast;
