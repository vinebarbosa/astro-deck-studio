import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/styles'
import { theme } from './styles/theme'

import { Header } from './components/Header'
import Home from './screens/Home'
import { PadsProvider } from './contexts/PadContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <PadsProvider>
        <Home />
      </PadsProvider>
    </ThemeProvider>
  )
}

export default App
