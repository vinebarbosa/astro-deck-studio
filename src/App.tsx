import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/styles'
import { theme } from './styles/theme'

import { Header } from './components/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  )
}

export default App
