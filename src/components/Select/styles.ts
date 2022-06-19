import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.shape};
  border-radius: 6px;
  padding: 18px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
`;
export const Icon = styled(Feather)`
  color: ${(props) => props.theme.colors.text};
`;
