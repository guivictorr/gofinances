import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
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

export function Dashboard() {
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
          title="Entradas"
          amount={17400}
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          title="Saídas"
          amount={14000}
          lastTransaction="Última entrada dia 16 de abril"
        />
        <HighlightCard
          title="Total"
          amount={3400}
          lastTransaction="01 á 06 de abril"
        />
      </HighlightCards>
    </Container>
  );
}
