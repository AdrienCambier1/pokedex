import { Route, Routes } from 'react-router-dom'
import { Home, NotFound, Pokemon, RickRoll } from './Routes'

export default function Main() {
  return (
    <main className="min-h-screen pt-28 p-10 relative bg-zinc-100 dark:bg-zinc-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="pokemon/:pokemonId" element={<Pokemon />} />
        <Route path="rickroll" element={<RickRoll />} />
      </Routes>
    </main>
  )
}
