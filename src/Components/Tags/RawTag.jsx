import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RawTag({ icon, value }) {
  return (
    <div className="h-8 w-fit dark-text px-4 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-700">
      <FontAwesomeIcon className="h-3 mr-2" icon={icon} />
      {value}
    </div>
  )
}
