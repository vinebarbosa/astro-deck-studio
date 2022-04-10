import React, { createContext, useEffect, useState } from 'react'
import { ActionDataProps } from '../components/Drawer/drawerData'

interface PadContextData {
  handleSelectPad: (pad: ActionDataProps) => void
  selectedPad: ActionDataProps
  hasPadSelected: boolean
}

export const PadsContext = createContext({} as PadContextData)

export const PadsProvider: React.FC = ({ children }) => {
  const [selectedPad, setSelectedPad] = useState({} as ActionDataProps)
  const [hasPadSelected, setHasPadSelected] = useState(false)

  function handleSelectPad(pad: ActionDataProps) {
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
