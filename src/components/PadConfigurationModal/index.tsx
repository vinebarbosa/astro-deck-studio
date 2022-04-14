import React from 'react'
import Modal from 'react-modal'
import { PadProps } from '../../interfaces/padProps'
import { LaunchApplicationForm } from './Forms/System/LaunchApplicationForm'
import { OpenUrlForm } from './Forms/System/OpenUrlForm'

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
  onRequestClose,
  pad,
  setPadProperties
}) => {
  return (
    <Modal
      isOpen={isOpen}
      className="settings-modal"
      overlayClassName="settings-modal-overlay"
      onRequestClose={onRequestClose}
    >
      <Header>
        <BackButton onClick={onRequestClose} />
        <Title>Configurar Botão</Title>
      </Header>
      {pad?.command?.category === 'system' &&
        pad?.command?.type === 'application' && <LaunchApplicationForm />}
      {pad?.command?.category === 'system' && pad?.command?.type === 'web' && (
        <OpenUrlForm pad={pad} setProperties={setPadProperties} />
      )}
    </Modal>
  )
}
