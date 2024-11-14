import React from 'react'
import { ContentCard, ImageCard } from '../Cards'
import { Highlight, Type } from '../Tags'
import * as BackgroundImages from '../../Images/BackgroundType'

export default function PokemonCard({ name, img, types, id }) {
  const formattedId = id.toString().padStart(3, '0')

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

  const typeImage = types
    .map((type) => {
      return typeImages[type]
    })
    .filter((element) => element !== undefined)[0]

  return (
    <ContentCard link={'pokemon/' + id}>
      <ImageCard image={typeImage}>
        <Highlight value={`No. ${formattedId}`} />
        <img src={img} />
      </ImageCard>
      <div>
        <p className="dark:text-white text-black text-xl mt-5 font-['Afacad]">{name}</p>
        <div className="flex flex-wrap gap-3 mt-5">
          {types.map((element) => (
            <Type key={element} value={element} />
          ))}
        </div>
      </div>
    </ContentCard>
  )
}
