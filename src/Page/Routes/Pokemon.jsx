import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import traduction from '../../Data/traduction.json'
import { LanguageContext, DataContext, LoadingContext } from '../../Contexts'
import * as BackgroundImages from '../../Images/BackgroundType'
import { HeavyButton, TextButton } from '../../Components/Buttons'
import { ContentCard, ImageCard } from '../../Components/Cards'
import { MainTitle, TitleSection } from '../../Components/Titles'
import { LightBlueTag, RawTag, Highlight, Type } from '../../Components/Tags'
import {
  faArrowLeft,
  faExplosion,
  faUpRightAndDownLeftFromCenter,
  faWeightHanging,
} from '@fortawesome/free-solid-svg-icons'
import { NotFound } from '../Routes'

export default function Pokemon() {
  const { pokemonId } = useParams()
  const { data } = useContext(DataContext)
  const { loadingData, loadingTypes } = useContext(LoadingContext)
  const { selectedLanguage } = useContext(LanguageContext)

  if (loadingData || loadingTypes) {
    return null
  } else {
    const parsedId = parseInt(pokemonId, 10)
    const id = parsedId - 1
    const pokemon = data[id]

    if (!pokemon) {
      return <NotFound />
    } else {
      const formattedId = data[id].id.toString().padStart(3, '0')

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

      const typeImage = pokemon.types
        .map((type) => typeImages[type])
        .find((image) => image !== undefined)

      return (
        <div className="relative w-full flex flex-col items-center">
          <MainTitle value={pokemon.names[selectedLanguage]} />

          <div className="w-full max-w-screen-md mt-10">
            <div className="py-4 w-full flex justify-between items-center gap-4">
              <TextButton
                value={traduction[selectedLanguage]['Pokémon précédent']}
                link={`/pokemon/${parsedId - 1}`}
                disabled={!data[id - 1]}
              />
              <TextButton
                value={traduction[selectedLanguage]['Pokémon suivant']}
                link={`/pokemon/${parsedId + 1}`}
                disabled={!data[id + 1]}
                isOnRight={true}
              />
            </div>
            <ContentCard>
              <TitleSection value={traduction[selectedLanguage]['Statistiques']} />

              <div className="flex gap-4 relative flex-col md:flex-row">
                <div className="w-full md:w-52 relative">
                  <ImageCard image={typeImage}>
                    <Highlight value={`No. ${formattedId}`} />
                    <img src={pokemon.image} alt={pokemon.names[selectedLanguage]} />
                  </ImageCard>
                </div>
                <div className="flex flex-col gap-3 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="gap-3 flex">
                      {pokemon.types.map((type) => (
                        <Type key={type} value={type} />
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <LightBlueTag
                        icon={faUpRightAndDownLeftFromCenter}
                        value={`${traduction[selectedLanguage]['Hauteur']} | ${pokemon.height}`}
                      />
                      <LightBlueTag
                        icon={faWeightHanging}
                        value={`${traduction[selectedLanguage]['Poids']} | ${pokemon.weight}`}
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
                <TitleSection value={traduction[selectedLanguage]['Compétences']} />
                <div className="relative gap-3 flex flex-wrap w-full">
                  {pokemon.moves.map((move) => (
                    <RawTag key={move} value={move} icon={faExplosion} />
                  ))}
                </div>
              </div>
            </ContentCard>
          </div>
        </div>
      )
    }
  }
}
