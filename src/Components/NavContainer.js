export default function NavContainer({ children }) {
  return (
    <div className="w-full shadow-md shadow-gray-300/50 dark:shadow-none dark:bg-neutral-900 bg-white border border-gray-300/50 dark:border-neutral-800 mt-4 absolute rounded-lg">
      {children}
    </div>
  )
}
