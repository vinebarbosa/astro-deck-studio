import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/styles'
import { theme } from './styles/theme'

import { Header } from './components/Header'
import Home from './screens/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
    </ThemeProvider>
  )
}

export default App
