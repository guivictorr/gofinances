import React from 'react';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { Text } from '../../components/Text';
import {
  TransactionItem,
  TransactionItemProps,
} from '../../components/TransactionItem';
import {
  Container,
  Header,
  User,
  UserInfo,
  UserWrapper,
  Photo,
  UserGreeting,
  Username,
  Icon,
  HighlightCards,
} from './styles';

const data = Array.from({ length: 7 }, (_, index) => ({
  title: 'Desenvolvimento de site',
  amount: 12_000,
  id: String(index),
  type: ['income', 'outcome'][Math.round(Math.random())] as
    | 'income'
    | 'outcome',
  category: {
    title: 'Casa',
    icon: 'shopping-bag',
  },
  date: new Date().toISOString(),
}));

export function Dashboard() {
  const contentStlyes = {
    paddingBottom: getBottomSpace(),
    paddingHorizontal: 24,
  };
  const listStyles = {
    marginTop: 84,
  };

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/55333929?v=4',
              }}
            />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <Username>Guilherme</Username>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="income"
          title="Entradas"
          amount={17400}
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="expense"
          title="Saídas"
          amount={14000}
          lastTransaction="Última entrada dia 16 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount={3400}
          lastTransaction="01 á 06 de abril"
        />
      </HighlightCards>

      <FlatList
        data={data}
        keyExtractor={(item: TransactionItemProps) => item.id}
        ListHeaderComponent={<Text size="lg">Listagem</Text>}
        renderItem={({ item }) => <TransactionItem {...item} />}
        showsVerticalScrollIndicator={false}
        style={listStyles}
        contentContainerStyle={contentStlyes}
      />
    </Container>
  );
}
