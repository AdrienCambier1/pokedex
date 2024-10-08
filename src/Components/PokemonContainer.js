import React from 'react'
import PokemonContent from '../Components/PokemonContent.js'
import PokemonData from '../Data/pokemons.json'
import { LanguageContext } from '../Contexts/LanguageContext'
import { useContext } from 'react'
import { SearchContext } from '../Contexts/SearchContext'

export default function PokemonContainer() {
  const { selectedLanguage } = useContext(LanguageContext)
  const { searchTerm } = useContext(SearchContext)

  const filteredPokemon = PokemonData.filter(({ names }) =>
    names[selectedLanguage].toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {filteredPokemon.map(({ id, names, image, types }) => (
        <PokemonContent key={id} id={id} name={names[selectedLanguage]} img={image} types={types} />
      ))}
    </div>
  )
}
