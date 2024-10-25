import './Style/index.css'
import Header from './Page/Header'
import Main from './Page/Main'
import { LanguageProvider, LanguageContext } from './Contexts/LanguageContext'
import { SearchProvider } from './Contexts/SearchContext'
import { ThemeProvider } from './Contexts/ThemeContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <Header></Header>
          <SearchProvider>
            <Main></Main>
          </SearchProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
