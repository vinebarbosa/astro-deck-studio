import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ${theme.fonts.regular};
    src: url('../assets/fonts/Inter-Regular.ttf');
  }

  @font-face {
    font-family: ${theme.fonts.medium};
    src: url('../assets/fonts/Inter-Medium.ttf');
  }

  @font-face {
    font-family: ${theme.fonts.semibold};
    src: url('../assets/fonts/Inter-SemiBold.ttf');
  }

  @font-face {
    font-family: ${theme.fonts.bold};
    src: url('../assets/fonts/Inter-Bold.ttf');
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.background};
  }

  button {
    cursor: pointer;
  }
`
