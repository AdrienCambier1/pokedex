import { createContext, useEffect, useState, useContext } from 'react'
import { LoadingContext } from '../Contexts'

export const TypesContext = createContext()

export const TypesProvider = ({ children }) => {
  const [types, setTypes] = useState({})
  const { setLoadingTypes } = useContext(LoadingContext)

  useEffect(() => {
    const fetchTypeData = async () => {
      try {
        const response = await fetch('https://pokedex-jgabriele.vercel.app/types.json')
        const data = await response.json()
        setTypes(data)
      } finally {
        setLoadingTypes(false)
      }
    }

    fetchTypeData()
  }, [setLoadingTypes])

  return <TypesContext.Provider value={{ types, setTypes }}>{children}</TypesContext.Provider>
}
