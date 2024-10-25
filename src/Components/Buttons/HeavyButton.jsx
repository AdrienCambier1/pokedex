import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function HeavyButton({ link, onClick, icon, content }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className="h-8 w-fit cursor-pointer flex flex-row px-4 justify-between items-center text-md text-white dark:text-black font-['Afacad'] bg-black dark:bg-white rounded-lg relative"
    >
      <FontAwesomeIcon className="h-3 mr-2" icon={icon} />
      {content}
    </Link>
  )
}
