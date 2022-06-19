import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { Container, Header, Form, Fields } from './styles';

export function Register() {
  return (
    <Container>
      <Header>
        <Text color="shape" size="lg">
          Cadastro
        </Text>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </Fields>
        <Button>
          <Text color="shape">Teste</Text>
        </Button>
      </Form>
    </Container>
  );
}
