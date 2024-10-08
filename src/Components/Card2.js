import backgroundImage from '../Images/background.jpeg'
import React from 'react'

export default function Card2({ children }) {
  const hasImage = React.Children.toArray(children).some((child) => child.type === 'img')

  return (
    <div
      style={{
        backgroundImage: hasImage ? `url(${backgroundImage})` : null,
        backgroundSize: 'cover',
      }}
      className="w-full dark:bg-neutral-900 bg-zinc-50 rounded-lg flex flex-col"
    >
      {children}
    </div>
  )
}
