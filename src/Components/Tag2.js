import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Tag2({ icon, value }) {
  return (
    <div className="h-fit w-fit text-zinc-700 dark:text-zinc-300 px-2 flex items-center justify-center font-['Afacad'] rounded-lg border border-zinc-100 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-700 dark:shadow-sm shadow-black/50">
      <FontAwesomeIcon className="h-3 mr-2" icon={icon} />
      {value}
    </div>
  )
}
