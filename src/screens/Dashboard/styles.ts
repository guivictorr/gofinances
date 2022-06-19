import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const UserGreeting = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
  `}
`;

export const Username = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(18)}px;
  `}
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
`;

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${RFValue(24)}px;
  `}
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24,
  },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;
