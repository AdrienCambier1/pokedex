import { Link } from 'react-router-dom'

export default function ContentCard({ link, children }) {
  return link ? (
    <Link to={link} className="w-full shadow relative dark:bg-zinc-800 bg-white rounded-xl p-4">
      {children}
    </Link>
  ) : (
    <div className="w-full shadow relative dark:bg-zinc-800 bg-white rounded-xl p-4">
      {children}
    </div>
  )
}
