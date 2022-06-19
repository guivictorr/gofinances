import styled, { css } from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    border-radius: 6px;
    padding: 18px;
    align-items: center;
    justify-content: center;
  `}
`;
