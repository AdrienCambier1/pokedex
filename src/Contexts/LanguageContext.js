import { createContext, useState, useEffect } from 'react'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const initialLanguage = localStorage.getItem('language') || 'fr'
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage)

  useEffect(() => {
    localStorage.setItem('language', selectedLanguage)
  }, [selectedLanguage])

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
