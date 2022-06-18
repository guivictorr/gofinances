import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { Text } from '../Text';

export const Container = styled.View`
  width: 100%;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.shape};
  padding: 18px 24px;
  margin-top: 16px;
`;

export const Footer = styled.View`
  margin-top: 18px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TypeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Amount = styled(Text)`
  margin-top: 4px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  margin-right: 18px;
`;
