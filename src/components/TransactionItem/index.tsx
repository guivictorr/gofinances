import React from 'react';
import { Text } from '../Text';
import { Container, Amount, Footer, Icon, TypeWrapper } from './styles';

export type TransactionItemProps = {
  title: string;
  id: string;
  amount: number;
  type: 'income' | 'outcome';
  category: {
    title: string;
    icon: string;
  };
  date: string;
};

export function TransactionItem({
  amount,
  category,
  date,
  title,
  type,
}: TransactionItemProps) {
  const formattedDate = new Date(date).toLocaleDateString();
  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);

  return (
    <Container>
      <Text size="sm">{title}</Text>
      <Amount color={type === 'income' ? 'success' : 'attention'} size="lg">
        {`${type === 'outcome' ? '-' : ''} ${formattedAmount}`}
      </Amount>
      <Footer>
        <TypeWrapper>
          <Icon name={category.icon} size={20} />
          <Text size="sm" color="text">
            {category.title}
          </Text>
        </TypeWrapper>

        <Text size="sm" color="text">
          {formattedDate}
        </Text>
      </Footer>
    </Container>
  );
}
