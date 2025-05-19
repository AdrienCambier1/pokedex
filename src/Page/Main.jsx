import { Route, Routes } from 'react-router-dom'
import { Home, NotFound, Pokemon } from './Routes'

export default function Main() {
  return (
    <main className="min-h-screen !pt-28 p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="pokemon/:pokemonId" element={<Pokemon />} />
      </Routes>
    </main>
  )
}
