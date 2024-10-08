import { useContext } from 'react'
import { LanguageContext } from '../../Contexts/LanguageContext'
import Type from '../../Components/Type'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faExplosion } from '@fortawesome/free-solid-svg-icons'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'
import Highlight from '../../Components/Highlight'
import Button1 from '../../Components/Button1'
import MainTitle from '../../Components/MainTitle'
import Card1 from '../../Components/Card1'
import Card2 from '../../Components/Card2'
import Tag1 from '../../Components/Tag1'
import Tag2 from '../../Components/Tag2'
import TitleSection from '../../Components/TitleSection'

export default function Pokemon({ data }) {
  const { selectedLanguage } = useContext(LanguageContext)
  const formattedId = data.id.toString().padStart(3, '0')

  return (
    <>
      <div className="relative w-full flex flex-col items-center">
        <MainTitle value={data.names[selectedLanguage]}></MainTitle>

        <div className="max-w-screen-md mt-10">
          <Card1>
            <TitleSection value="Statistiques"></TitleSection>

            <div className="flex gap-4 relative flex-col md:flex-row">
              <div className="w-full md:w-52 relative">
                <Card2>
                  <Highlight value={formattedId}></Highlight>
                  <img src={data.image} />
                </Card2>
              </div>
              <div className="flex flex-col gap-3 justify-between">
                <div className="flex flex-col gap-3">
                  <div className="gap-3 flex">
                    {data.types.map((element) => (
                      <Type key={element} value={element}></Type>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Tag1
                      icon={faUpRightAndDownLeftFromCenter}
                      value={`Hauteur | ${data.height}`}
                    ></Tag1>
                    <Tag1 icon={faWeightHanging} value={`Poids | ${data.weight}`}></Tag1>
                  </div>
                </div>
                <Button1 link="/" content="Retour à la recherche" icon={faArrowLeft}></Button1>
              </div>
            </div>

            <div className="mt-16 relative">
              <TitleSection value="Compétences"></TitleSection>

              <div className="relative gap-3 flex flex-wrap w-full">
                {data.moves.map((element) => (
                  <Tag2 key={element} value={element} icon={faExplosion}></Tag2>
                ))}
              </div>
            </div>
          </Card1>
        </div>
      </div>
    </>
  )
}
