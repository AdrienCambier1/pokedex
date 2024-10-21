import Searchbar from '../../Components/Searchbar'
import PokemonContainer from '../../Components/PokemonContainer'
import '../../Style/index.css'
import MainTitle from '../../Components/MainTitle'
import traduction from '../../Data/traduction.json'
import Types from '../../Data/types.json'
import { LanguageContext } from '../../Contexts/LanguageContext'
import { useContext, useState } from 'react'
import TypeFilterButton from '../../Components/TypeFilterButton'

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
        <MainTitle value={traduction[selectedLanguage]["Retrouvez n'importe quel pokemon"]} />

        <Searchbar placeholder={traduction[selectedLanguage]['Effectuez une recherche']} />

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
