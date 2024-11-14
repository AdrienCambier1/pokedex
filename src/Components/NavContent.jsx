import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavContent({ icon, link, onClick, data }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className="whitespace-nowrap px-4 flex items-center justify-start cursor-pointer dark:text-zinc-300 text-zinc-700 text-center m-1 h-8 dark:hover:bg-zinc-800 hover:bg-zinc-100 rounded-md transition-all ease-in-out"
    >
      {icon && <FontAwesomeIcon icon={icon} className="h-3 mr-2" />}
      {data}
    </Link>
  )
}
