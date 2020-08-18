import React, { useEffect } from 'react';

import ToastContentView from './ToastContentView';
import { ToastMessage, useToast } from '../../../hooks/Toast/Toast';

interface Props {
  message: ToastMessage;
  onDismiss(id: string): void;
  style: object;
}

const ToastContent: React.FC<Props> = ({ message, onDismiss, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <ToastContentView message={message} onDismiss={onDismiss} style={style} />
  );
};

export default ToastContent;
