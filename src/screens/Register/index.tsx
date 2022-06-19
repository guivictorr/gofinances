import React from 'react';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { Container, Header, Form } from './styles';

export function Register() {
  return (
    <Container>
      <Header>
        <Text color="shape" size="lg">
          Cadastro
        </Text>
      </Header>

      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
      </Form>
    </Container>
  );
}
