import React from 'react'
import { useDrag } from 'react-dnd'
import { ActionDataProps } from '../Drawer/drawerData'

import { Container } from './styles'

interface ActionProps {
  data: ActionDataProps
}

const Action: React.FC<ActionProps> = ({ data }) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: { data },
    type: 'ACTION',
    collect: (monitor) => ({ isDragging: monitor.isDragging() })
  })

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <img src={data.alternativeIconPath} alt="icone" />
      <p>{data.label}</p>
    </Container>
  )
}

export default Action
