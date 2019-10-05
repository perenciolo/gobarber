import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${props => (props.past ? 0.5 : 1)};
`;

export const Left = styled.View`
  margin-right: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  max-width: 200px;
  margin: 0 15px;
  display: flex;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Time = styled.Text`
  flex: 1;
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

export const Btn = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;
