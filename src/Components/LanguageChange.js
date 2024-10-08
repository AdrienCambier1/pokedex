import types from '../Data/types.json'
import { useState, useContext, useRef, useEffect } from 'react'
import { LanguageContext } from '../Contexts/LanguageContext'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import Button1 from './Button1'
import NavContainer from './NavContainer'
import NavContent from './NavContent'

export default function LanguageChange() {
  const languages = types.normal.translations
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const [isLanguageSelectorVisible, setIsLanguageSelectorVisible] = useState(false)
  const menuRef = useRef(null)

  const handleLanguageChange = (langue) => {
    setSelectedLanguage(langue)
    setIsLanguageSelectorVisible(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsLanguageSelectorVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <Button1
        onClick={() => setIsLanguageSelectorVisible(!isLanguageSelectorVisible)}
        icon={faFlag}
        content={selectedLanguage}
      />
      {isLanguageSelectorVisible && (
        <NavContainer>
          {Object.keys(languages).map((langue) => (
            <NavContent key={langue} data={langue} onClick={() => handleLanguageChange(langue)} />
          ))}
        </NavContainer>
      )}
    </div>
  )
}
