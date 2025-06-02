import { Route, Routes } from 'react-router-dom'
import { Home, NotFound, Pokemon } from './Routes'

export default function Main() {
  return (
    <main className="min-h-screen !pt-16 p-4 sm:p-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="pokemon/:pokemonId" element={<Pokemon />} />
      </Routes>
    </main>
  )
}
