export default function TypeFilterButton({ value, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive
          ? ' bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
          : 'bg-white dark:bg-zinc-800 dark-text dark:border-zinc-700 border-white'
      } h-8 w-fit px-5 flex items-center justify-center text-lg rounded-full border hover:border-black dark:hover:border-white shadow`}
    >
      {value}
    </button>
  )
}
