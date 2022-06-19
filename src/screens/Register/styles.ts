import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: ${RFValue(113)}px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 19px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
