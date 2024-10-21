export default function NavContent({ link, onClick, data }) {
  return (
    <a
      href={link}
      onClick={onClick}
      className="flex items-center justify-center cursor-pointer dark:text-zinc-300 text-zinc-700 text-center m-1 h-8 dark:hover:bg-zinc-800 hover:bg-zinc-100 rounded-md transition-all ease-in-out"
    >
      {data}
    </a>
  )
}
