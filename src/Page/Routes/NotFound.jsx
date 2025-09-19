import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { MainTitle } from '../../Components/Titles'
import { HeavyButton } from '../../Components/Buttons'
import traduction from '../../Data/traduction.json'
import { LanguageContext } from '../../Contexts'
import { useContext } from 'react'

export default function NotFound() {
  const { selectedLanguage } = useContext(LanguageContext)
  return (
    <div className="flex items-center flex-col relative justify-center">
      <MainTitle value={traduction[selectedLanguage]['Page introuvable']} />
      <div className="mt-8 gap-4 w-full flex flex-col items-center">
        <p className="font-bold font-['Afacad'] text-neutral-500 text-2xl w-fit uppercase relative">
          404
        </p>
        <HeavyButton link="/" icon={faArrowLeft} content={traduction[selectedLanguage]['Retour']} />
      </div>
    </div>
  )
}
