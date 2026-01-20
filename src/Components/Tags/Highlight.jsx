export default function Highlight({ value }) {
  return (
    <p className="bg-red-500 shadow-red-500/50 text-white rounded-br-md rounded-tl-md w-fit h-8 px-4 flex items-center justify-center">
      {value}
    </p>
  )
}
