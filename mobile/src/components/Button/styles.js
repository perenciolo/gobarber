import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  background: ${props => props.bg || '#3b93ff'};
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${props => props.color || '#FFF'};
  font-weight: bold;
  font-size: 16px;
`;
