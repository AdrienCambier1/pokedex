import React, { useState } from 'react'

export default function ImageCard({ children, image }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 w-full rounded-lg flex flex-col overflow-hidden relative">
      <img
        src={image}
        alt=""
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        style={{ display: isLoading ? 'none' : 'block' }}
        className="block absolute inset-0 w-full h-full object-cover"
      />
      <div className="w-full flex flex-col z-40">{children}</div>
    </div>
  )
}
