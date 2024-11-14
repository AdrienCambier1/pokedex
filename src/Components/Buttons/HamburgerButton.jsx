import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HamburgerButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex sm:hidden h-8 w-8 items-center justify-center rounded-lg"
    >
      <span className="button-background"></span>
      <FontAwesomeIcon icon={faBars} className="h-3 z-20 text-white" />
    </button>
  )
}
