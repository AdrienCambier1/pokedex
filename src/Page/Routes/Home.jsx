import { PokemonContainer } from '../../Components'
import traduction from '../../Data/traduction.json'
import { LanguageContext, TypesContext, LoadingContext } from '../../Contexts'
import { useContext, useState } from 'react'
import { SearchBar } from '../../Components/Inputs'
import { MainTitle } from '../../Components/Titles'
import { TypeFilterButton } from '../../Components/Buttons'

export default function Home() {
  const { types } = useContext(TypesContext)
  const { loadingData, loadingTypes } = useContext(LoadingContext)
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

  if (loadingData || loadingTypes) {
    return null
  } else {
    return (
      <>
        <div className="relative w-full flex flex-col items-center">
          <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&t=2s">
            <MainTitle value={traduction[selectedLanguage]["Retrouvez n'importe quel pokemon"]} />
          </a>
          <SearchBar placeholder={traduction[selectedLanguage]['Effectuez une recherche']} />

          <div className="flex gap-2 mt-8 flex-wrap justify-center max-w-3xl">
            {Object.keys(types).map((type) => (
              <TypeFilterButton
                key={type}
                value={types[type].translations[selectedLanguage]}
                isActive={selectedTypes.includes(type)}
                onClick={() => handleSelectedTypes(type)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-5 mt-10 relative">
          <PokemonContainer selectedTypes={selectedTypes} />
        </div>
      </>
    )
  }
}
