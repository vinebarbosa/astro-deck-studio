import React from 'react'
import { useDrag } from 'react-dnd'
import { PadProps } from '../../interfaces/padProps'

import { Container } from './styles'

interface ActionProps {
  data: PadProps
}

export const MenuOption: React.FC<ActionProps> = ({ data }) => {
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
