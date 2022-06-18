import { Text as RNText } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css, DefaultTheme } from 'styled-components/native';

type DefaultSizes = 'sm' | 'md' | 'lg';
type Multipliers = 'x' | 'xx';

type Sizes = `${Multipliers}${DefaultSizes}` | DefaultSizes;

type TextProps = {
  color?: keyof DefaultTheme['colors'];
  size?: Sizes;
  weight?: keyof DefaultTheme['fonts'];
};

const textModifiers = {
  sizes: {
    xxsm: 8,
    xsm: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xlg: 20,
    xxlg: 24,
  },
};

export const Text = styled(RNText)<TextProps>`
  ${({ color = 'text_dark', size = 'md', weight = 'regular', theme }) => css`
    color: ${theme.colors[color]};
    font-family: ${theme.fonts[weight]};
    font-size: ${RFValue(textModifiers.sizes[size])}px;
  `}
`;
