import React from 'react';
import { Text } from '../Text';
import { Container, Icon } from './styles';

export function Select() {
  return (
    <Container>
      <Text color="text" size="sm">
        Categoria
      </Text>
      <Icon name="chevron-down" size={25} />
    </Container>
  );
}
