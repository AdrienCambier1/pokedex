import React from 'react'
import Type from './Type'
import Card1 from './Card1'
import Card2 from './Card2'
import Highlight from './Highlight'

export default function PokemonContent({ name, img, types, id }) {
  const formattedId = id.toString().padStart(3, '0')
  return (
    <Card1 link={'pokemon_' + id}>
      <Card2>
        <Highlight value={formattedId}></Highlight>
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
