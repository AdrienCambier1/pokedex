import { useContext } from 'react'
import { SearchContext } from '../Contexts/SearchContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Searchbar({ placeholder }) {
  const { searchTerm, setSearchTerm } = useContext(SearchContext)

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="flex items-center justify-start pl-5 h-fit rounded-lg font-['Afacad'] dark:bg-neutral-900 bg-white w-full mt-10 border border-white dark:border-neutral-800 shadow-md shadow-gray-300/50 dark:shadow-none">
      <FontAwesomeIcon
        className="dark:text-white text-black h-4 transition-all ease-in-out"
        icon={faMagnifyingGlass}
      />
      <input
        className="dark:text-white text-black dark:placeholder:text-neutral-600 placeholder-neutral-400 focus:outline-none w-full h-8 py-5 rounded-lg bg-transparent ml-5"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}
