import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function TextButton({ value, isOnRight, onClick, link, disabled }) {
  if (isOnRight) {
    return (
      <Link
        className={`${
          disabled && 'opacity-50 cursor-not-allowed'
        } flex items-center text-end text-md text-black dark:text-white`}
        disabled={disabled}
        onClick={!disabled && onClick}
        to={!disabled && link}
      >
        {value}
        <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 ml-2" />
      </Link>
    )
  } else {
    return (
      <Link
        className={`${
          disabled && 'opacity-50 cursor-not-allowed'
        } flex items-center text-start text-md text-black dark:text-white`}
        disabled={disabled}
        onClick={!disabled && onClick}
        to={!disabled && link}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 mr-2" />
        {value}
      </Link>
    )
  }
}
