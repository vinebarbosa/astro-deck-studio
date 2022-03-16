import React from 'react'
import { FiX, FiMinus, FiSquare } from 'react-icons/fi'
import { Container, Title, WindowActions, ActionButton } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Title>Astro</Title>
      <WindowActions position="right" shouldShowIconsOnHover>
        <ActionButton>
          <FiMinus size={18} />
        </ActionButton>
        <ActionButton>
          <FiSquare size={16} />
        </ActionButton>
        <ActionButton>
          <FiX size={18} />
        </ActionButton>
      </WindowActions>
    </Container>
  )
}
