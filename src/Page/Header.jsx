import logo from '../Images/logo.png'
import traduction from '../Data/traduction.json'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { LanguageChange, MenuList } from '../Components'
import { useContext } from 'react'
import { LanguageContext, ThemeContext } from '../Contexts'
import { useNavigate } from 'react-router-dom'
import { LightButton } from '../Components/Buttons'

export default function Header() {
  const { Theme, setTheme } = useContext(ThemeContext)
  const { selectedLanguage } = useContext(LanguageContext)
  const navigate = useNavigate()

  const handleToggleTheme = () => {
    const newTheme = Theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleNavigationToHome = () => {
    navigate('/')
    ScrollToTop()
  }

  return (
    <header className="w-full border-b border-white dark:border-zinc-700 dark:bg-zinc-900 bg-white shadow-md shadow-gray-300/50 dark:shadow-none h-16 flex fixed z-50 items-center justify-between px-10">
      <button onClick={handleNavigationToHome} className="h-8 relative">
        <img className="h-full" src={logo} alt={logo}></img>
      </button>
      <div className="flex gap-2">
        <div className="hidden gap-2 sm:flex">
          <LightButton
            onClick={handleToggleTheme}
            icon={faCircleHalfStroke}
            content={traduction[selectedLanguage]['Thème']}
          />
          <LightButton
            onClick={handleNavigationToHome}
            icon={faHouse}
            content={traduction[selectedLanguage]['Accueil']}
          />
        </div>
        <LanguageChange />
        <MenuList />
      </div>
    </header>
  )
}
