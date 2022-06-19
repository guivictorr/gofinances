import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Input = styled.TextInput`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
    padding: 18px 16px;
    color: ${theme.colors.text_dark};
    font-size: ${RFValue(18)}px;
    border-radius: 6px;
    margin-bottom: 6px;
  `}
`;
