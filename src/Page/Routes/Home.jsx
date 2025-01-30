import { PokemonContainer } from '../../Components'
import traduction from '../../Data/traduction.json'
import { LanguageContext, TypesContext, LoadingContext } from '../../Contexts'
import { useContext, useState, useEffect } from 'react'
import { SearchBar } from '../../Components/Inputs'
import { MainTitle } from '../../Components/Titles'
import { TypeFilterButton } from '../../Components/Buttons'
import RickRollVideo from '../../Videos/RickRoll.mp4'

export default function Home() {
  const { types } = useContext(TypesContext)
  const { loadingData, loadingTypes } = useContext(LoadingContext)
  const { selectedLanguage } = useContext(LanguageContext)
  const [selectedTypes, setSelectedTypes] = useState([])
  const [isRickRoll, setIsRickRoll] = useState(false)

  const handleSelectedTypes = (type) => {
    setSelectedTypes((prev) => {
      if (prev.includes(type)) {
        return prev.filter((value) => value !== type)
      } else {
        return [...prev, type]
      }
    })
  }

  useEffect(() => {
    const videoElement = document.getElementById('rick-roll-video')
    if (videoElement) {
      videoElement.muted = false
    }
  }, [isRickRoll])

  if (loadingData || loadingTypes) {
    return null
  } else {
    return (
      <>
        {isRickRoll && (
          <div class="top-0 left-0 w-screen h-screen fixed z-50">
            <video
              className="h-full w-full object-cover"
              id="rick-roll-video"
              src={RickRollVideo}
              type="video/mp4"
              autoPlay
              loop
              muted
              controls
            />
          </div>
        )}
        <div className="relative w-full flex flex-col items-center">
          <button onClick={() => setIsRickRoll(!isRickRoll)}>
            <MainTitle value={traduction[selectedLanguage]["Retrouvez n'importe quel pokemon"]} />
          </button>

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
