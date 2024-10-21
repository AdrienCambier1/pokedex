import Searchbar from '../../Components/Searchbar'
import PokemonContainer from '../../Components/PokemonContainer'
import '../../Style/index.css'
import MainTitle from '../../Components/MainTitle'
import traduction from '../../Data/traduction.json'
import { LanguageContext } from '../../Contexts/LanguageContext'
import { useContext } from 'react'

export default function Home() {
  const { selectedLanguage } = useContext(LanguageContext)
  return (
    <>
      <div className="relative w-full flex flex-col items-center">
        <MainTitle
          value={traduction[selectedLanguage]["Retrouvez n'importe quel pokemon"]}
        ></MainTitle>
        <Searchbar
          placeholder={traduction[selectedLanguage]['Effectuez une recherche']}
        ></Searchbar>
      </div>
      <div className="flex flex-wrap gap-5 mt-10 relative">
        <PokemonContainer></PokemonContainer>
      </div>
    </>
  )
}
