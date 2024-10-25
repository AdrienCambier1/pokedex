export default function TypeFilterButton({ value, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive
          ? ' bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
          : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 dark:border-zinc-700 border-white'
      } h-fit w-fit px-5 flex items-center justify-center font-['Afacad'] text-lg rounded-full border hover:border-black dark:hover:border-white shadow-md dark:shadow-none shadow-gray-300/50`}
    >
      {value}
    </button>
  )
}
