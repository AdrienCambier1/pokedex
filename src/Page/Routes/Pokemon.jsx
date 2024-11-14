import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import traduction from '../../Data/traduction.json'
import { LanguageContext } from '../../Contexts/LanguageContext'
import * as BackgroundImages from '../../Images/BackgroundType'
import { HeavyButton } from '../../Components/Buttons'
import { ContentCard, ImageCard } from '../../Components/Cards'
import { MainTitle, TitleSection } from '../../Components/Titles'
import { LightBlueTag, RawTag, Highlight, Type } from '../../Components/Tags'
import {
  faArrowLeft,
  faExplosion,
  faUpRightAndDownLeftFromCenter,
  faWeightHanging,
} from '@fortawesome/free-solid-svg-icons'
import NotFound from '../Routes/NotFound'

export default function Pokemon() {
  const { pokemonId } = useParams()
  const { selectedLanguage } = useContext(LanguageContext)
  const [pokemonData, setPokemonData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokedex-jgabriele.vercel.app/pokemons.json')
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données Pokémon')
        }
        const data = await response.json()
        setPokemonData(data)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPokemonData()
  }, [])

  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <div className="loader"></div>
      </div>
    )
  }

  const pokemon = pokemonData.find((p) => p.id === parseInt(pokemonId, 10))

  if (!pokemon) {
    return <NotFound />
  }

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

  const formattedId = pokemon.id.toString().padStart(3, '0')

  return (
    <div className="relative w-full flex flex-col items-center">
      <MainTitle value={pokemon.names[selectedLanguage]} />

      <div className="max-w-screen-md mt-10">
        <ContentCard>
          <TitleSection value={traduction[selectedLanguage]['Statistiques']} />

          <div className="flex gap-4 relative flex-col md:flex-row">
            <div className="w-full md:w-52 relative">
              <ImageCard image={typeImage}>
                <Highlight value={formattedId} />
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
                    value={`${traduction[selectedLanguage]['Taille']} | ${pokemon.height}`}
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
