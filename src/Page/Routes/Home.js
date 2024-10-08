import Searchbar from '../../Components/Searchbar'
import PokemonContainer from '../../Components/PokemonContainer'
import '../../Style/index.css'
import MainTitle from '../../Components/MainTitle'

export default function Home() {
  return (
    <>
      <div className="relative w-full flex flex-col items-center">
        <MainTitle value="Retrouvez n'importe quel pokemon"></MainTitle>
        <Searchbar placeholder="Effectuez une recherche"></Searchbar>
      </div>
      <div className="flex flex-wrap gap-5 mt-10 relative">
        <PokemonContainer></PokemonContainer>
      </div>
    </>
  )
}
