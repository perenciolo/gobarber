import React from 'react';
import {
  FiAlertCircle,
  FiXCircle,
  FiSlash,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';

import { Content } from './ToastContentView.styles';
import { ToastMessage } from '../../../hooks/Toast/Toast';

interface Props {
  message: ToastMessage;
  onDismiss(id: string): void;
  style: object;
}
const icons = {
  alert: <FiSlash size={24} />,
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  warning: <FiAlertCircle size={24} />,
};
const ToastContentView: React.FC<Props> = ({ message, onDismiss, style }) => {
  return (
    <Content key={message.id} type={message.type} style={style}>
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button type="button" onClick={() => onDismiss(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Content>
  );
};

export default ToastContentView;
