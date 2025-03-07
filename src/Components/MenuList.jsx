import { NavContainer, NavContent } from '../Components'
import { HeavyButton } from './Buttons'
import traduction from '../Data/traduction.json'
import { ThemeContext, LanguageContext } from '../Contexts'
import { useContext, useState, useRef, useEffect } from 'react'
import { faBars, faCircleHalfStroke, faHouse } from '@fortawesome/free-solid-svg-icons'

export default function MenuList() {
  const { Theme, setTheme } = useContext(ThemeContext)
  const { selectedLanguage } = useContext(LanguageContext)
  const [isSelectorVisible, setIsSelectorVisible] = useState(false)
  const menuRef = useRef(null)

  function handleScrollToTop() {
    setIsSelectorVisible(false)
    scrollToTop()
  }

  function handleToggleTheme() {
    const newTheme = Theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    setIsSelectorVisible(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsSelectorVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative block sm:hidden" ref={menuRef}>
      <HeavyButton
        content={traduction[selectedLanguage]['Menu']}
        icon={faBars}
        onClick={() => setIsSelectorVisible((prev) => !prev)}
      />

      {isSelectorVisible && (
        <NavContainer>
          <NavContent
            icon={faCircleHalfStroke}
            data={traduction[selectedLanguage]['Thème']}
            onClick={handleToggleTheme}
          />
          <NavContent
            icon={faHouse}
            data={traduction[selectedLanguage]['Accueil']}
            link="/"
            onClick={handleScrollToTop}
          />
        </NavContainer>
      )}
    </div>
  )
}
