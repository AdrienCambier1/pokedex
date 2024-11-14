import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HamburgerButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex sm:hidden h-8 w-8 items-center justify-center rounded-lg border dark:border-zinc-700 border-zinc-200 dark:text-zinc-300 text-zinc-600 dark:hover:bg-zinc-800 hover:bg-zinc-100"
    >
      <FontAwesomeIcon icon={faBars} className="h-3" />
    </button>
  )
}
