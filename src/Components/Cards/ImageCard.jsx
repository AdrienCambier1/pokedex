import React, { useState } from 'react'

export default function ImageCard({ children, image }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="w-full rounded-lg flex flex-col overflow-hidden relative">
      {isLoading && <div className="loader"></div>}
      <img
        src={image}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        style={{ display: isLoading ? 'none' : 'block' }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {!isLoading && (
        <>
          <div className="w-full flex flex-col z-40">{children}</div>
        </>
      )}
    </div>
  )
}
