import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({
  children,
  loading,
  handler,
  bg,
  color,
  ...otherProps
}) {
  return (
    <Container onPress={handler} bg={bg} color={color} {...otherProps}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  bg: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
  bg: '#3b93ff',
  color: '#FFF',
};
