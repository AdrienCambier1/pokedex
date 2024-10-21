import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Tag2({ icon, value }) {
  return (
    <div className="h-8 w-fit text-zinc-700 dark:text-zinc-300 px-4 flex items-center justify-center font-['Afacad'] rounded-lg bg-zinc-100 dark:bg-zinc-700">
      <FontAwesomeIcon className="h-3 mr-2" icon={icon} />
      {value}
    </div>
  )
}
