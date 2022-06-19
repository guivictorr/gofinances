import styled, { css, DefaultTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { HighlightCardProps, HighlightIcon } from '.';
import { FlattenSimpleInterpolation } from 'styled-components';
import { Text } from '../Text';

type GenericModifier<T extends string | number | symbol> = Record<
  T,
  (theme: DefaultTheme) => FlattenSimpleInterpolation
>;

type ContainerProps = Pick<HighlightCardProps, 'type'>;

const containerModifier: GenericModifier<ContainerProps['type']> = {
  total: (theme) => css`
    background-color: ${theme.colors.secondary};
  `,
  income: (theme) => css`
    background-color: ${theme.colors.shape};
  `,
  expense: (theme) => css`
    background-color: ${theme.colors.shape};
  `,
};

export const Container = styled.View<ContainerProps>`
  border-radius: 5px;
  width: ${RFValue(300)}px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
  color: red;

  ${({ type, theme }) => containerModifier[type](theme)}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer = styled.View``;

export const Amount = styled(Text)`
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
`;

const iconModifiers: GenericModifier<HighlightIcon> = {
  'arrow-up-circle': (theme) => css`
    color: ${theme.colors.success};
  `,
  'arrow-down-circle': (theme) => css`
    color: ${theme.colors.attention};
  `,
  'dollar-sign': (theme) => css`
    color: ${theme.colors.shape};
  `,
};

export const Icon = styled(Feather)`
  ${(props) => iconModifiers[props.name](props.theme)}
`;
