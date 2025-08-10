export default function MainTitle({ value }) {
  return (
    <div className="flex relative mb-4">
      <div className="w-2 bg-amber-300 rounded-full mr-2 shadow-md shadow-amber-300/50"></div>
      <h1 className="text-center font-semibold dark:text-white text-black text-3xl w-fit">
        {value}
      </h1>
    </div>
  )
}
