import React, { createContext, useEffect, useState } from 'react'
import { PadProps } from '../interfaces/padProps'
interface PadContextData {
  selectedPad: PadProps
  hasPadSelected: boolean
  setPad: (pad: PadProps) => void
  resetPad: () => void
}

export const PadsContext = createContext({} as PadContextData)

export const PadsProvider: React.FC = ({ children }) => {
  const [selectedPad, setSelectedPad] = useState({} as PadProps)
  const [hasPadSelected, setHasPadSelected] = useState(false)

  useEffect(() => {
    if (selectedPad.id !== undefined) {
      setHasPadSelected(true)
    } else {
      setHasPadSelected(false)
    }
  }, [selectedPad])

  function setPad(pad: PadProps) {
    setSelectedPad(pad)
  }

  function resetPad() {
    setSelectedPad({} as PadProps)
  }

  return (
    <PadsContext.Provider
      value={{
        setPad,
        selectedPad,
        hasPadSelected,
        resetPad
      }}
    >
      {children}
    </PadsContext.Provider>
  )
}
