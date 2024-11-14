import { createContext, useState, useEffect, useContext } from 'react'
import { LoadingContext } from '../Contexts'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([])
  const { setLoadingData } = useContext(LoadingContext)

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokedex-jgabriele.vercel.app/pokemons.json')
        const data = await response.json()
        setData(data)
      } finally {
        setLoadingData(false)
      }
    }

    fetchPokemonData()
  }, [setLoadingData])

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>
}
