import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function HeavyButton({ link, onClick, icon, content }) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${
        content ? 'px-4 w-fit' : 'w-8'
      } h-8 cursor-pointer flex flex-row justify-center items-center text-md text-white dark:text-black bg-black dark:bg-white rounded-lg relative`}
    >
      <FontAwesomeIcon className={`h-3 ${content && 'mr-2'}`} icon={icon} />
      {content}
    </Link>
  )
}
