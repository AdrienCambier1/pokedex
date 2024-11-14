import React, { useContext } from 'react'
import { PokemonCard } from './Cards'
import { LanguageContext } from '../Contexts/LanguageContext'
import { SearchContext } from '../Contexts/SearchContext'
import PokemonData from '../Data/pokemons.json'

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
