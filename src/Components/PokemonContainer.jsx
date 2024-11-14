import React, { useContext, useState, useEffect } from 'react'
import { PokemonCard } from './Cards'
import { LanguageContext } from '../Contexts/LanguageContext'
import { SearchContext } from '../Contexts/SearchContext'

export default function PokemonContainer({ selectedTypes }) {
  const { selectedLanguage } = useContext(LanguageContext)
  const { searchTerm } = useContext(SearchContext)
  const [pokemonData, setPokemonData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokedex-jgabriele.vercel.app/pokemons.json')
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données Pokémon')
        }
        const data = await response.json()
        setPokemonData(data)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPokemonData()
  }, [])

  const filteredPokemon = pokemonData.filter(({ names, types }) => {
    const matchesSearchTerm = names[selectedLanguage]
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.some((selectedType) => types.includes(selectedType))

    return matchesSearchTerm && matchesType
  })

  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <div className="loader"></div>
      </div>
    )
  }

  if (filteredPokemon.length === 0) {
    return (
      <div className="w-full flex justify-center">
        <p className="font-bold font-['Afacad'] text-neutral-500 text-2xl w-fit relative">
          Aucun résultat
        </p>
      </div>
    )
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {filteredPokemon.map(({ id, names, image, types }) => (
        <PokemonCard key={id} id={id} name={names[selectedLanguage]} img={image} types={types} />
      ))}
    </div>
  )
}
