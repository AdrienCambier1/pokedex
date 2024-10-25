import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const initialTheme = localStorage.getItem('theme') || 'dark'
  const [Theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    localStorage.setItem('theme', Theme)
    document.querySelector('html').classList.toggle('dark', Theme === 'dark')
  }, [Theme])

  return <ThemeContext.Provider value={{ Theme, setTheme }}>{children}</ThemeContext.Provider>
}
