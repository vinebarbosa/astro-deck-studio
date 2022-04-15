import React from 'react'

import { UpIcon, DownIcon } from './styles'

interface ArrowButtonProps {
  select?: boolean
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ select }) => {
  return select ? <UpIcon /> : <DownIcon />
}
