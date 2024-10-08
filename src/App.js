import './Style/index.css'
import Header from './Page/Header.js'
import Main from './Page/Main.js'
import { LanguageProvider, LanguageContext } from './Contexts/LanguageContext.js'
import { SearchProvider } from './Contexts/SearchContext.js'
import { ThemeProvider } from './Contexts/ThemeContext.js'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header></Header>
        <SearchProvider>
          <Main></Main>
        </SearchProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
