import React, { useState } from 'react'
import Action from '../Action/intex'

import ArrowButton from '../ArrowButton'
import { ActionDataProps } from '../Drawer/drawerData'

import { Container, Icon, Label } from './styles'
interface ActionsGroupProps {
  iconPath: string
  label: string
  actions: ActionDataProps[]
}

const ActionsGroup: React.FC<ActionsGroupProps> = ({
  iconPath,
  label,
  actions
}) => {
  const [isDrawing, setIsDrawing] = useState(false)

  function handleUserClick() {
    setIsDrawing(!isDrawing)
  }

  return (
    <>
      <Container onClick={handleUserClick}>
        <ArrowButton select={isDrawing} />
        <Icon path={iconPath} />
        <Label text={label} />
      </Container>
      {isDrawing &&
        actions.map((action, index) => <Action key={index} data={action} />)}
    </>
  )
}

export default ActionsGroup
