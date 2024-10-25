import React from 'react'

export default function ImageCard({ children, image }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
      }}
      className="w-full rounded-lg flex flex-col overflow-hidden relative"
    >
      <div className="w-full flex flex-col z-40">{children}</div>
      <div className="w-full h-full absolute bg-black/25" />
    </div>
  )
}
