import types from '../../Data/types.json'
import { LanguageContext } from '../../Contexts/LanguageContext'
import { useContext, useEffect, useState } from 'react'

export default function Type({ value }) {
  const { selectedLanguage } = useContext(LanguageContext)
  const hexToRgba = (hex, opacity) => {
    let r = parseInt(hex.slice(1, 3), 16)
    let g = parseInt(hex.slice(3, 5), 16)
    let b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  const typeColor = types[value].backgroundColor

  const shadowColor = hexToRgba(typeColor, 0.5)
  const typeTraducted = types[value].translations[selectedLanguage]

  return (
    <div
      style={{ backgroundColor: typeColor, boxShadow: `0 0 10px 2px ${shadowColor}` }}
      className="text-center text-white rounded-md px-5 font-['Afacad'] h-fit w-fit shadow-md"
    >
      {typeTraducted}
    </div>
  )
}
