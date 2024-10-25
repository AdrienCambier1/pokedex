import React from 'react'
import { PokemonCard } from './Cards'
import PokemonData from '../Data/pokemons.json'
import { LanguageContext } from '../Contexts/LanguageContext'
import { useContext } from 'react'
import { SearchContext } from '../Contexts/SearchContext'

export default function PokemonContainer({ selectedTypes }) {
  const { selectedLanguage } = useContext(LanguageContext)
  const { searchTerm } = useContext(SearchContext)

  const filteredPokemon = PokemonData.filter(({ names, types }) => {
    const matchesSearchTerm = names[selectedLanguage]
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.some((selectedType) => types.includes(selectedType))

    return matchesSearchTerm && matchesType
  })

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {filteredPokemon.map(({ id, names, image, types }) => (
        <PokemonCard key={id} id={id} name={names[selectedLanguage]} img={image} types={types} />
      ))}
    </div>
  )
}
