import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import _ from 'lodash';

import Toast from '../../components/Toast/Toast';

export interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'alert' | 'warning';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ title, type, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        title,
        type,
        description,
      };

      setMessages(oldMsgs => {
        const cloneMsgs = _.cloneDeep(oldMsgs);
        return [...cloneMsgs, toast];
      });
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages(oldMsgs => oldMsgs.filter(msg => msg.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
