import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LightBlueTag({ icon, value }) {
  return (
    <div className="h-8 w-fit text-white bg-sky-400 rounded-full px-4 flex items-center justify-center">
      <FontAwesomeIcon className="h-3 mr-2" icon={icon} />
      {value}
    </div>
  )
}
