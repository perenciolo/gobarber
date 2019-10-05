import React, { useMemo } from 'react';
import { Alert , TouchableOpacity } from "react-native";

import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';
import api from '~/services/api';

export default function Confirm({ navigation }) {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time],
  );

  async function handleAddAppointment() {
    try {
      await api.post(`appointments`, {
        provider_id: provider.id,
        date: time,
      });

      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível realizar o agendamento. Tente novamente.',
      );
    }
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri:
              (provider && provider.avatar && provider.avatar.url) ||
              `http://api.adorable.io/avatar/50/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton handler={handleAddAppointment}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar Agendamento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
