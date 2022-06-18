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

type HighlightCardProps = {
  title: string;
  amount: number;
  lastTransaction: string;
};

export function HighlightCard({
  amount,
  lastTransaction,
  title,
}: HighlightCardProps) {
  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>{formattedAmount}</Amount>
        <LastTransaction>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
