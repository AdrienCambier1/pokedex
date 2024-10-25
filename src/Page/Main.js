import Home from './Routes/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './Routes/NotFound'
import Pokemon from './Routes/Pokemon'

export default function Main() {
  return (
    <main className="min-h-screen pt-28 p-10 relative bg-zinc-100 dark:bg-zinc-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="pokemon/:pokemonId" element={<Pokemon />} />
      </Routes>
    </main>
  )
}
