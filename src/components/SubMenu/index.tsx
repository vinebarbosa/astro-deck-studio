import React, { useState } from 'react'
import { MenuOption } from '../MenuOption'

import { ArrowButton } from '../ArrowButton'
import { PadProps } from '../../interfaces/padProps'

import { Container, Icon, Label } from './styles'
interface ActionsGroupProps {
  iconPath: string
  label: string
  actions: PadProps[]
}

const SubMenu: React.FC<ActionsGroupProps> = ({ iconPath, label, actions }) => {
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
        actions.map((action, index) => (
          <MenuOption key={index} data={action} />
        ))}
    </>
  )
}

export default SubMenu
