import './Style/index.css'
import { Header, Main } from './Page'
import {
  LanguageProvider,
  SearchProvider,
  ThemeProvider,
  TypesProvider,
  DataProvider,
  LoadingProvider,
} from './Contexts'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <LoadingProvider>
        <DataProvider>
          <TypesProvider>
            <ThemeProvider>
              <LanguageProvider>
                <Header></Header>
                <SearchProvider>
                  <Main></Main>
                </SearchProvider>
              </LanguageProvider>
            </ThemeProvider>
          </TypesProvider>
        </DataProvider>
      </LoadingProvider>
    </Router>
  )
}

export default App
