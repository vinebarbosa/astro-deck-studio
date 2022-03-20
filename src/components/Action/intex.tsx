import React from 'react'

import { Container } from './styles'

interface ActionProps {
  icon: string
  label: string
}

const Action: React.FC<ActionProps> = ({ icon, label }) => {
  return (
    <Container>
      <img src={icon} alt="icone" />
      <p>{label}</p>
    </Container>
  )
}

export default Action
