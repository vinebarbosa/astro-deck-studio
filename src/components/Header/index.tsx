import React from 'react'
import { FiX, FiMinus, FiSquare } from 'react-icons/fi'
import { Container, Title, WindowActions, ActionButton } from './styles'

export const Header: React.FC = () => {
  function handleMaximize() {
    window.Main.maximize()
  }

  function handleMinimize() {
    window.Main.minimize()
  }

  function handleClose() {
    window.Main.close()
  }

  return (
    <Container>
      <Title>Astro</Title>
      <WindowActions position="right" shouldShowIconsOnHover>
        <ActionButton onClick={handleMinimize}>
          <FiMinus size={18} />
        </ActionButton>
        <ActionButton onClick={handleMaximize}>
          <FiSquare size={14} />
        </ActionButton>
        <ActionButton action="close" onClick={handleClose}>
          <FiX size={18} />
        </ActionButton>
      </WindowActions>
    </Container>
  )
}
