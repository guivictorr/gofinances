import React from 'react';
import {
  Container,
  Header,
  User,
  UserInfo,
  UserWrapper,
  Photo,
  UserGreeting,
  Username,
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
        </UserWrapper>
      </Header>
    </Container>
  );
}
