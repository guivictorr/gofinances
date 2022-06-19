import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TypeButtonProps } from '.';

type ContainerProps = Pick<TypeButtonProps, 'isActive' | 'type'>;

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 160px;
  padding: 18px;
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.colors.text_light};
  background-color: ${({ theme, isActive, type }) =>
    isActive
      ? theme.colors[type === 'expense' ? 'attention_light' : 'success_light']
      : 'transparent'};
`;

export const Icon = styled(Feather)`
  margin-right: 14px;
`;
