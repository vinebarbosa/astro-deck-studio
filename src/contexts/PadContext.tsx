import React, { createContext, useEffect, useState } from 'react'
import { PadProps } from '../interfaces/padProps'

interface PadContextData {
  handleSelectPad: (pad: PadProps) => void
  selectedPad: PadProps
  hasPadSelected: boolean
}

export const PadsContext = createContext({} as PadContextData)

export const PadsProvider: React.FC = ({ children }) => {
  const [selectedPad, setSelectedPad] = useState({} as PadProps)
  const [hasPadSelected, setHasPadSelected] = useState(false)

  function handleSelectPad(pad: PadProps) {
    if (pad.id !== selectedPad.id) {
      setSelectedPad(pad)
    }
  }

  useEffect(() => {
    if (selectedPad.id !== undefined) {
      setHasPadSelected(true)
    } else {
      setHasPadSelected(false)
    }
  }, [selectedPad])

  return (
    <PadsContext.Provider
      value={{
        handleSelectPad: handleSelectPad,
        selectedPad,
        hasPadSelected
      }}
    >
      {children}
    </PadsContext.Provider>
  )
}
