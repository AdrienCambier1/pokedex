import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LightBlueTag({ icon, value }) {
  return (
    <div
      style={{ boxShadow: '0 0 10px 2px rgba(56, 189, 248, 0.5)' }}
      className="h-fit w-fit text-white bg-sky-400 shadow-md shadow-sky-300/50 rounded-md px-2 flex items-center justify-center font-['Afacad']"
    >
      <FontAwesomeIcon className="h-3 mr-2" icon={icon} />
      {value}
    </div>
  )
}
