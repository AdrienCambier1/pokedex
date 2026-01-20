import { LanguageContext, TypesContext, LoadingContext } from '../../Contexts'
import { useContext } from 'react'

export default function Type({ value }) {
  const { types } = useContext(TypesContext)
  const { loadingData, loadingTypes } = useContext(LoadingContext)
  const { selectedLanguage } = useContext(LanguageContext)

  const typeColor = types[value].backgroundColor
  const typeTraducted = types[value].translations[selectedLanguage]

  if (loadingData || loadingTypes) {
    return null
  } else {
    return (
      <div
        style={{ backgroundColor: typeColor }}
        className="text-center text-white rounded-full px-4 h-8 w-fit flex items-center justify-center"
      >
        {typeTraducted}
      </div>
    )
  }
}
