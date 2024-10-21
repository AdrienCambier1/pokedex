export default function TypeFilterButton({ value, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive
          ? ' text-amber-300 border-amber-300'
          : 'text-zinc-700 dark:text-zinc-300 border-transparent'
      } h-fit w-fit  hover:text-amber-300  p-2 flex items-center justify-center font-['Afacad'] text-lg border-b-2 hover:border-amber-300 `}
    >
      {value}
    </button>
  )
}
