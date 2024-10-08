import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Button1 from '../../Components/Button1'
import MainTitle from '../../Components/MainTitle'

export default function NotFound() {
  return (
    <div className="flex items-center flex-col relative justify-center">
      <div className="flex items-center flex-col mb-10">
        <MainTitle value="Page introuvable"></MainTitle>
        <p className="font-bold font-['Afacad'] text-neutral-500 text-2xl w-fit uppercase relative">
          404
        </p>
      </div>

      <Button1 link="/" icon={faArrowLeft} content="Retour"></Button1>
    </div>
  )
}
