import React from 'react';
import {
  Amount,
  Container,
  Footer,
  Header,
  Icon,
  LastTransaction,
  Title,
} from './styles';

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Title</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>R$ 120,00</Amount>
        <LastTransaction>Última entrada dia 17 de abril</LastTransaction>
      </Footer>
    </Container>
  );
}
