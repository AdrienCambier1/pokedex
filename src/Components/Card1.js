export default function Card1({ link, children }) {
  return link ? (
    <a
      href={link}
      className="w-full dark:shadow-none shadow-md shadow-gray-300/50 relative dark:bg-neutral-950 bg-white rounded-lg p-4 border border-white dark:border-neutral-800"
    >
      {children}
    </a>
  ) : (
    <div className="w-full dark:shadow-none shadow-md shadow-gray-300/50 relative dark:bg-neutral-950 bg-white rounded-lg p-4 border border-white dark:border-neutral-800">
      {children}
    </div>
  )
}
