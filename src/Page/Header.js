import logo from '../Images/logo.png'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import LanguageChange from '../Components/LanguageChange.js'
import Button2 from '../Components/Button2.js'
import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext.js'
import { LanguageContext } from '../Contexts/LanguageContext.js'
import traduction from '../Data/traduction.json'
import { Link } from 'react-router-dom'

export default function Header() {
  const { Theme, setTheme } = useContext(ThemeContext)
  const { selectedLanguage } = useContext(LanguageContext)

  function handleToggleTheme() {
    const newTheme = Theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <header className="w-full border-b border-white dark:border-zinc-700 dark:bg-zinc-900 bg-white shadow-md shadow-gray-300/50 dark:shadow-none h-16 flex fixed z-50 items-center justify-between px-10">
      <Link to="/" className="h-8 relative">
        <img className="h-full" src={logo}></img>
      </Link>
      <div className="flex gap-2">
        <Button2
          onClick={handleToggleTheme}
          icon={faCircleHalfStroke}
          content={traduction[selectedLanguage]['Thème']}
        ></Button2>
        <Button2
          link="/"
          icon={faHouse}
          content={traduction[selectedLanguage]['Accueil']}
        ></Button2>
        <LanguageChange></LanguageChange>
      </div>
    </header>
  )
}
