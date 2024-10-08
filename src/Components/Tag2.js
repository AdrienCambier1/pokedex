import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Tag2({ icon, value }) {
  return (
    <div className="h-fit w-fit text-neutral-700 dark:text-neutral-300 px-2 flex items-center justify-center font-['Afacad'] bg-neutral-100 dark:bg-neutral-900 border border-gray-300/50 dark:border-neutral-800 rounded-full">
      <FontAwesomeIcon className="h-3 mr-2" icon={icon} />
      {value}
    </div>
  )
}
