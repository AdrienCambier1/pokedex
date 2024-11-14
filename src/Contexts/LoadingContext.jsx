import { createContext, useState } from 'react'

export const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
  const [loadingData, setLoadingData] = useState(true)
  const [loadingTypes, setLoadingTypes] = useState(true)

  return (
    <LoadingContext.Provider value={{ loadingData, setLoadingData, loadingTypes, setLoadingTypes }}>
      {children}
    </LoadingContext.Provider>
  )
}
