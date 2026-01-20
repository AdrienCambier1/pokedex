import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function LightButton({ link, onClick, icon, content }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className="h-8 w-fit cursor-pointer dark:shadow-none  shadow-amber-300/50 dark-text rounded-lg px-4 bg-amber-300 dark:bg-zinc-800 flex items-center justify-center"
    >
      <FontAwesomeIcon className="h-3 mr-2" icon={icon} />
      {content}
    </Link>
  )
}
