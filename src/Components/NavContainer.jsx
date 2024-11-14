export default function NavContainer({ children }) {
  return (
    <div className="right-0 min-w-full shadow-md shadow-gray-300/50 dark:shadow-none dark:bg-zinc-900 bg-white border border-gray-300/50 dark:border-zinc-700 mt-4 absolute rounded-lg">
      {children}
    </div>
  )
}
