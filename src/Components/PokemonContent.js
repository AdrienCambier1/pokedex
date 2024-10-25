import React from 'react'
import Type from './Type'
import Card1 from './Card1'
import Card2 from './Card2'
import Highlight from './Highlight'
import Poison from '../Images/BackgroundType/poison.jpg'
import Grass from '../Images/BackgroundType/plante.jpeg'
import Fire from '../Images/BackgroundType/feu.jpg'
import Flying from '../Images/BackgroundType/vol.jpeg'
import Water from '../Images/BackgroundType/eau.jpg'
import Bug from '../Images/BackgroundType/insecte.jpg'
import Normal from '../Images/BackgroundType/normal.jpg'
import Electric from '../Images/BackgroundType/electrick.jpg'
import Ground from '../Images/BackgroundType/sol.webp'
import Fairy from '../Images/BackgroundType/fée.png'
import Fighting from '../Images/BackgroundType/combat.png'
import Psychic from '../Images/BackgroundType/psy.png'
import Rock from '../Images/BackgroundType/roche.jpg'
import Ice from '../Images/BackgroundType/glace.jpg'
import Dragon from '../Images/BackgroundType/dragon.jpg'

export default function PokemonContent({ name, img, types, id }) {
  const formattedId = id.toString().padStart(3, '0')

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

  const typeImage = types
    .map((type) => {
      return typeImages[type]
    })
    .filter((element) => element !== undefined)[0]

  return (
    <Card1 link={'pokemon/' + id}>
      <Card2 image={typeImage}>
        <Highlight value={`No. ${formattedId}`}></Highlight>
        <img src={img} />
      </Card2>
      <div>
        <p className="dark:text-white text-black text-xl mt-5 font-['Afacad]">{name}</p>
        <div className="flex flex-wrap gap-3 mt-5">
          {types.map((element) => (
            <Type key={element} value={element}></Type>
          ))}
        </div>
      </div>
    </Card1>
  )
}
