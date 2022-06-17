/* eslint-disable @typescript-eslint/no-empty-interface */
import theme from '../global/styles/theme';

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
