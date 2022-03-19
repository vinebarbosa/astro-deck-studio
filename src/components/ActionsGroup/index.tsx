import React, { useState } from 'react'
import ArrowButton from '../ArrowButton'

import { Container, Icon, Label } from './styles'

interface ActionsGroupProps {
  iconPath: string
  label: string
}

const ActionsGroup: React.FC<ActionsGroupProps> = ({ iconPath, label }) => {
  const [isDrawing, setIsDrawing] = useState(false)

  function handleUserClick() {
    setIsDrawing(!isDrawing)
  }

  return (
    <Container onClick={handleUserClick}>
      <ArrowButton select={isDrawing} />
      <Icon path={iconPath} />
      <Label text={label} />
    </Container>
  )
}

export default ActionsGroup
