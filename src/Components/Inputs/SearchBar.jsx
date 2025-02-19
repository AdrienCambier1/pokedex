import { useContext } from 'react'
import { SearchContext } from '../../Contexts/SearchContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({ placeholder }) {
  const { searchTerm, setSearchTerm } = useContext(SearchContext)

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="flex items-center justify-start px-5 h-fit rounded-full font-['Afacad'] dark:bg-zinc-700 bg-white w-full mt-10 shadow-md shadow-gray-300/50 dark:shadow-black/50 max-w-3xl">
      <FontAwesomeIcon
        className="dark:text-white text-black h-4 transition-all ease-in-out"
        icon={faMagnifyingGlass}
      />
      <input
        className="dark:text-white text-black placeholder-zinc-400 focus:outline-none w-full h-8 py-5 bg-transparent ml-5"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}
