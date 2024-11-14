import { useState, useContext, useRef, useEffect } from 'react'
import { LanguageContext } from '../Contexts'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { NavContainer, NavContent } from '../Components'
import { HeavyButton } from './Buttons'
import traduction from '../Data/traduction.json'

export default function LanguageChange() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const [isSelectorVisible, setIsSelectorVisible] = useState(false)
  const menuRef = useRef(null)

  const handleLanguageChange = (langue) => {
    setSelectedLanguage(langue)
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

  return (
    <div className="relative" ref={menuRef}>
      <HeavyButton
        onClick={() => setIsSelectorVisible((prev) => !prev)}
        icon={faFlag}
        content={selectedLanguage}
      />
      {isSelectorVisible && (
        <NavContainer>
          {Object.keys(traduction).map((langue) => (
            <NavContent key={langue} data={langue} onClick={() => handleLanguageChange(langue)} />
          ))}
        </NavContainer>
      )}
    </div>
  )
}
