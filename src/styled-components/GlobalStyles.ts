import { createGlobalStyle } from 'styled-components';

export interface DefaultTheme {
  body: string;
  text: string;
}

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
body {
background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
} `;
