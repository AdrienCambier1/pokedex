import PokemonContainer from '../../Components/PokemonContainer'
import traduction from '../../Data/traduction.json'
import Types from '../../Data/types.json'
import { LanguageContext } from '../../Contexts/LanguageContext'
import { useContext, useState } from 'react'
import { SearchBar } from '../../Components/Inputs'
import { MainTitle } from '../../Components/Titles'
import { TypeFilterButton } from '../../Components/Buttons'
import { Link } from 'react-router-dom'

export default function Home() {
  const { selectedLanguage } = useContext(LanguageContext)

  const [selectedTypes, setSelectedTypes] = useState([])

  const handleSelectedTypes = (type) => {
    setSelectedTypes((prev) => {
      if (prev.includes(type)) {
        return prev.filter((value) => value !== type)
      } else {
        return [...prev, type]
      }
    })
  }

  return (
    <>
      <div className="relative w-full flex flex-col items-center">
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&t=2s">
          <MainTitle value={traduction[selectedLanguage]["Retrouvez n'importe quel pokemon"]} />
        </a>
        <SearchBar placeholder={traduction[selectedLanguage]['Effectuez une recherche']} />

        <div className="flex gap-2 mt-8 flex-wrap justify-center max-w-3xl">
          {Object.keys(Types).map((type) => (
            <TypeFilterButton
              key={type}
              value={Types[type].translations[selectedLanguage]}
              isActive={selectedTypes.includes(type)}
              onClick={() => handleSelectedTypes(type)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-10 relative">
        <PokemonContainer selectedTypes={selectedTypes}></PokemonContainer>
      </div>
    </>
  )
}
