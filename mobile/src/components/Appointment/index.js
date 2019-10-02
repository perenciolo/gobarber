import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time, Btn } from './styles';

export default function Appointment({ data, onCancel }) {
  const { provider, date, past, cancelable, canceled_at } = data;

  const dateParsed = useMemo(
    () =>
      formatRelative(parseISO(date), new Date(), {
        locale: pt,
        addSuffix: true,
      }),
    [date],
  );

  return (
    <Container past={past}>
      <Left>
        <Avatar
          source={{
            uri:
              (provider.avatar && provider.avatar.url) ||
              `https://api.adorable.io/avatar/50/${provider.name}.png`,
          }}
        />
        <Info>
          <Name>{provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {cancelable && !canceled_at && (
        <Btn onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </Btn>
      )}
    </Container>
  );
}
