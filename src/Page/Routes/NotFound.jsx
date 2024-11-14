import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { MainTitle } from '../../Components/Titles'
import { HeavyButton } from '../../Components/Buttons'
import traductions from '../../Data/traduction.json'
import { LanguageContext } from '../../Contexts'
import { useContext } from 'react'

export default function NotFound() {
  const { selectedLanguage } = useContext(LanguageContext)
  return (
    <div className="flex items-center flex-col relative justify-center">
      <div className="flex items-center flex-col mb-10">
        <MainTitle value={traductions[selectedLanguage]['Page introuvable']} />
        <p className="font-bold font-['Afacad'] text-neutral-500 text-2xl w-fit uppercase relative">
          404
        </p>
      </div>

      <HeavyButton link="/" icon={faArrowLeft} content={traductions[selectedLanguage]['Retour']} />
    </div>
  )
}
