import React from 'react';
import { Text } from '../Text';
import { Amount, Container, Footer, Header, Icon } from './styles';

export type HighlightCardProps = {
  title: string;
  amount: number;
  lastTransaction: string;
  type: 'income' | 'expense' | 'total';
};

export enum HighlightIcon {
  income = 'arrow-up-circle',
  expense = 'arrow-down-circle',
  total = 'dollar-sign',
}

export function HighlightCard({
  amount,
  lastTransaction,
  title,
  type,
}: HighlightCardProps) {
  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
  const color = type === 'total' ? 'shape' : 'text_dark';

  return (
    <Container type={type}>
      <Header>
        <Text size="sm" color={color}>
          {title}
        </Text>
        <Icon name={HighlightIcon[type]} />
      </Header>
      <Footer>
        <Amount color={color} weight="medium">
          {formattedAmount}
        </Amount>
        <Text color={type === 'total' ? 'shape' : 'text'} size="xsm">
          {lastTransaction}
        </Text>
      </Footer>
    </Container>
  );
}
