export default function Card1({ link, children }) {
  return link ? (
    <a
      href={link}
      className="w-full shadow-md dark:shadow-black/50 shadow-gray-300/50 relative dark:bg-zinc-800 bg-white rounded-xl p-4"
    >
      {children}
    </a>
  ) : (
    <div className="w-full shadow-md dark:shadow-black/50 shadow-gray-300/50 relative dark:bg-zinc-800 bg-white rounded-xl p-4">
      {children}
    </div>
  )
}
