import PokemonData from '../../Data/pokemons.json'
import traduction from '../../Data/traduction.json'
import { useContext } from 'react'
import { LanguageContext } from '../../Contexts/LanguageContext'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faExplosion } from '@fortawesome/free-solid-svg-icons'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import * as BackgroundImages from '../../Images/BackgroundType'
import { HeavyButton } from '../../Components/Buttons'
import { ContentCard, ImageCard } from '../../Components/Cards'
import { MainTitle, TitleSection } from '../../Components/Titles'
import { LightBlueTag, RawTag, Highlight, Type } from '../../Components/Tags'

export default function Pokemon() {
  const { pokemonId } = useParams()
  const { selectedLanguage } = useContext(LanguageContext)
  const formattedId = PokemonData[pokemonId].id.toString().padStart(3, '0')

  const typeImages = {
    poison: BackgroundImages.poison,
    grass: BackgroundImages.plante,
    fire: BackgroundImages.feu,
    flying: BackgroundImages.vol,
    water: BackgroundImages.eau,
    bug: BackgroundImages.insecte,
    normal: BackgroundImages.normal,
    electric: BackgroundImages.electrick,
    ground: BackgroundImages.sol,
    fairy: BackgroundImages.fée,
    fighting: BackgroundImages.combat,
    psychic: BackgroundImages.psy,
    rock: BackgroundImages.roche,
    ice: BackgroundImages.glace,
    dragon: BackgroundImages.dragon,
  }

  const typeImage = PokemonData[pokemonId].types
    .map((type) => {
      return typeImages[type]
    })
    .filter((element) => element !== undefined)[0]

  return (
    <>
      <div className="relative w-full flex flex-col items-center">
        <MainTitle value={PokemonData[pokemonId].names[selectedLanguage]} />

        <div className="max-w-screen-md mt-10">
          <ContentCard>
            <TitleSection value={traduction[selectedLanguage]['Statistiques']} />

            <div className="flex gap-4 relative flex-col md:flex-row">
              <div className="w-full md:w-52 relative">
                <ImageCard image={typeImage}>
                  <Highlight value={formattedId} />
                  <img src={PokemonData[pokemonId].image} />
                </ImageCard>
              </div>
              <div className="flex flex-col gap-3 justify-between">
                <div className="flex flex-col gap-3">
                  <div className="gap-3 flex">
                    {PokemonData[pokemonId].types.map((element) => (
                      <Type key={element} value={element} />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <LightBlueTag
                      icon={faUpRightAndDownLeftFromCenter}
                      value={`${traduction[selectedLanguage]['Compétences']} | ${PokemonData[pokemonId].height}`}
                    />
                    <LightBlueTag
                      icon={faWeightHanging}
                      value={`${traduction[selectedLanguage]['Poids']} | ${PokemonData[pokemonId].weight}`}
                    />
                  </div>
                </div>
                <HeavyButton
                  link="/"
                  content={traduction[selectedLanguage]['Retour à la recherche']}
                  icon={faArrowLeft}
                />
              </div>
            </div>

            <div className="mt-16 relative">
              <TitleSection value={traduction[selectedLanguage]['Compétences']}></TitleSection>

              <div className="relative gap-3 flex flex-wrap w-full">
                {PokemonData[pokemonId].moves.map((element) => (
                  <RawTag key={element} value={element} icon={faExplosion} />
                ))}
              </div>
            </div>
          </ContentCard>
        </div>
      </div>
    </>
  )
}
