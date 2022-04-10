import React, { createContext, useEffect, useState } from 'react'
import { PadProps } from '../interfaces/padProps'

interface PadContextData {
  setPad: (pad: PadProps) => void
  selectedPad: PadProps
  hasPadSelected: boolean
}

export const PadsContext = createContext({} as PadContextData)

export const PadsProvider: React.FC = ({ children }) => {
  const [selectedPad, setSelectedPad] = useState({} as PadProps)
  const [hasPadSelected, setHasPadSelected] = useState(false)

  function setPad(pad: PadProps) {
    setSelectedPad(pad)
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
        setPad,
        selectedPad,
        hasPadSelected
      }}
    >
      {children}
    </PadsContext.Provider>
  )
}
