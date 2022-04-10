import React from 'react'
import Modal from 'react-modal'
import { PadProps } from '../../interfaces/padProps'

import { Title, BackButton, Header } from './styles'

interface Props {
  isOpen: boolean
  pad: PadProps
  setPadProperties: (pad: PadProps) => void
  onRequestClose: () => void
}

Modal.setAppElement('#root')

export const PadConfigurationModal: React.FC<Props> = ({
  isOpen,
  onRequestClose
}) => {
  return (
    <Modal isOpen={isOpen} className="settings-modal">
      <Header>
        <BackButton onClick={onRequestClose} />
        <Title>Configurar Botão</Title>
      </Header>
    </Modal>
  )
}
