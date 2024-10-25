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
import traduction from '../../Data/traduction.json'
import Poison from '../../Images/BackgroundType/poison.jpg'
import Grass from '../../Images/BackgroundType/plante.jpeg'
import Fire from '../../Images/BackgroundType/feu.jpg'
import Flying from '../../Images/BackgroundType/vol.jpeg'
import Water from '../../Images/BackgroundType/eau.jpg'
import Bug from '../../Images/BackgroundType/insecte.jpg'
import Normal from '../../Images/BackgroundType/normal.jpg'
import Electric from '../../Images/BackgroundType/electrick.jpg'
import Ground from '../../Images/BackgroundType/sol.webp'
import Fairy from '../../Images/BackgroundType/fée.png'
import Fighting from '../../Images/BackgroundType/combat.png'
import Psychic from '../../Images/BackgroundType/psy.png'
import Rock from '../../Images/BackgroundType/roche.jpg'
import Ice from '../../Images/BackgroundType/glace.jpg'
import Dragon from '../../Images/BackgroundType/dragon.jpg'
import { useParams } from 'react-router-dom'
import PokemonData from '../../Data/pokemons.json'

export default function Pokemon() {
  const { pokemonId } = useParams()
  const { selectedLanguage } = useContext(LanguageContext)
  const formattedId = PokemonData[pokemonId].id.toString().padStart(3, '0')

  const typeImages = {
    poison: Poison,
    grass: Grass,
    fire: Fire,
    flying: Flying,
    water: Water,
    bug: Bug,
    normal: Normal,
    electric: Electric,
    ground: Ground,
    fairy: Fairy,
    fighting: Fighting,
    psychic: Psychic,
    rock: Rock,
    ice: Ice,
    dragon: Dragon,
  }

  const typeImage = PokemonData[pokemonId].types
    .map((type) => {
      return typeImages[type]
    })
    .filter((element) => element !== undefined)[0]

  return (
    <>
      <div className="relative w-full flex flex-col items-center">
        <MainTitle value={PokemonData[pokemonId].names[selectedLanguage]}></MainTitle>

        <div className="max-w-screen-md mt-10">
          <Card1>
            <TitleSection value={traduction[selectedLanguage]['Statistiques']}></TitleSection>

            <div className="flex gap-4 relative flex-col md:flex-row">
              <div className="w-full md:w-52 relative">
                <Card2 image={typeImage}>
                  <Highlight value={formattedId}></Highlight>
                  <img src={PokemonData[pokemonId].image} />
                </Card2>
              </div>
              <div className="flex flex-col gap-3 justify-between">
                <div className="flex flex-col gap-3">
                  <div className="gap-3 flex">
                    {PokemonData[pokemonId].types.map((element) => (
                      <Type key={element} value={element}></Type>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Tag1
                      icon={faUpRightAndDownLeftFromCenter}
                      value={`${traduction[selectedLanguage]['Compétences']} | ${PokemonData[pokemonId].height}`}
                    ></Tag1>
                    <Tag1
                      icon={faWeightHanging}
                      value={`${traduction[selectedLanguage]['Poids']} | ${PokemonData[pokemonId].weight}`}
                    ></Tag1>
                  </div>
                </div>
                <Button1
                  link="/"
                  content={traduction[selectedLanguage]['Retour à la recherche']}
                  icon={faArrowLeft}
                ></Button1>
              </div>
            </div>

            <div className="mt-16 relative">
              <TitleSection value={traduction[selectedLanguage]['Compétences']}></TitleSection>

              <div className="relative gap-3 flex flex-wrap w-full">
                {PokemonData[pokemonId].moves.map((element) => (
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
