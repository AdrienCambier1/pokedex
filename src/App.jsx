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
import { ScrollToTop } from './Functions'
import Footer from './Page/Footer'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LoadingProvider>
        <DataProvider>
          <TypesProvider>
            <ThemeProvider>
              <LanguageProvider>
                <Header />
                <SearchProvider>
                  <Main />
                </SearchProvider>
                <Footer />
              </LanguageProvider>
            </ThemeProvider>
          </TypesProvider>
        </DataProvider>
      </LoadingProvider>
    </Router>
  )
}

export default App
