import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { TypeButton } from '../../components/TypeButton';
import { Container, Header, Form, Fields, TypesWrapper } from './styles';

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
          <TypesWrapper>
            <TypeButton type="income" />
            <TypeButton type="expense" />
          </TypesWrapper>
        </Fields>
        <Button>
          <Text color="shape">Teste</Text>
        </Button>
      </Form>
    </Container>
  );
}
