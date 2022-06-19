import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 160px;
  padding: 18px;
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.colors.text_light};
`;

export const Icon = styled(Feather)`
  margin-right: 14px;
`;
