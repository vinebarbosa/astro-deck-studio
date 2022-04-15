import { useContext } from 'react'

import { PadsContext } from '../contexts/PadContext'

export const usePads = () => {
  const context = useContext(PadsContext)
  if (!context) {
    throw new Error('usePads must be used within a PadsProvider')
  }
  return context
}
