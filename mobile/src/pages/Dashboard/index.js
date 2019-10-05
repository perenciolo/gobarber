import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

const pageTitle = 'Agendamentos';

function Dashboard({ isFocused }) {
  const [appointments, setAppointments] = useState();

  async function loadAppointments() {
    const response = await api.get('appointments');

    setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    try {
      const response = await api.delete(`appointments/${id}`);

      setAppointments(
        appointments.map(appointment =>
          appointment.id === id
            ? {
                ...appointment,
                canceled_at: response.data.canceled_at,
              }
            : appointment,
        ),
      );
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível cancelar o agendamento, por favor tente novamente.',
      );
    }
  }

  return (
    <Background>
      <Container>
        <Title>{pageTitle}</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: pageTitle,
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
