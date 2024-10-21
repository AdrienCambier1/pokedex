import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button2({ link, onClick, icon, content }) {
  return (
    <a
      href={link}
      onClick={onClick}
      className="h-8 w-fit cursor-pointer dark:shadow-none shadow-md shadow-amber-300/50 dark:text-zinc-300 text-zinc-700 rounded-lg px-4 bg-amber-300 dark:bg-zinc-800 flex items-center justify-center font-['Afacad']"
    >
      <FontAwesomeIcon className="h-3 mr-2" icon={icon} />
      {content}
    </a>
  )
}
