import React from 'react'
import RickRollVideo from '../../Videos/RickRoll.mp4'
import ReactDOM from 'react-dom'

export default function RickRoll() {
  return ReactDOM.createPortal(
    <div className="top-0 left-0 z-50 fixed h-screen w-screen bg-black">
      <video
        className="h-full w-full object-cover"
        src={RickRollVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        controls
      />
    </div>,
    document.querySelector('body')
  )
}
