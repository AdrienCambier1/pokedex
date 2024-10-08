import logo from '../Images/logo.png'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import LanguageChange from '../Components/LanguageChange.js'
import Button2 from '../Components/Button2.js'
import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext.js'

export default function Header() {
  const { Theme, setTheme } = useContext(ThemeContext)

  function handleToggleTheme() {
    const newTheme = Theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <header className="w-full border-b border-white dark:border-neutral-800 dark:bg-black bg-white shadow-md shadow-gray-300/50 dark:shadow-none h-16 flex fixed z-50 items-center justify-between px-10">
      <a href="/" className="h-8 relative">
        <img className="h-full" src={logo}></img>
      </a>
      <div className="flex gap-2">
        <Button2 onClick={handleToggleTheme} icon={faCircleHalfStroke} content="Theme"></Button2>
        <Button2 link="/" icon={faHouse} content="Accueil"></Button2>
        <LanguageChange></LanguageChange>
      </div>
    </header>
  )
}
