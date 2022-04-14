import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { v4 as uuid } from 'uuid'
import { PadConfigurationModal } from '../PadConfigurationModal'

import {
  ConfigurablePad,
  DeleteIcon,
  EmptyPad,
  SettingsAndDeleteContainer,
  SettingsIcon,
  VerticalSeparationLine
} from './styles'

import { PadProps } from '../../interfaces/padProps'

import { usePads } from '../../hooks/usePads'
import { api } from '../../services/api'
interface Props {
  data: PadProps
  index: number
}

export const Pad: React.FC<Props> = ({ data, index }) => {
  const [padProprieties, setPadProperties] = useState({} as PadProps)

  const { setPad, selectedPad, hasPadSelected, resetPad } = usePads()
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      setPad({} as PadProps)
    }
  }

  useEffect(() => {
    setPadProperties(data)
  }, [data])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  async function handleUpdatePad(data: PadProps) {
    if (!data.id) data.id = uuid()
    if (data.index === -1) data.index = index
    const response = await api.put('button', data)
    setPadProperties(response.data)
  }

  async function handleDeletePad() {
    const { data } = await api.delete(`button/${padProprieties.id}`)
    setPadProperties(data)
    setPad({} as PadProps)
  }

  const [, dropRef] = useDrop({
    accept: 'ACTION',
    drop({ data }: Props) {
      handleUpdatePad(data)
    }
  })

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function handleConfigurationButtonClick() {
    resetPad()
    openModal()
  }

  function handleConfigurablePadClick() {
    setPad(padProprieties)
  }

  return padProprieties.id !== '' ? (
    <>
      <ConfigurablePad
        isSelected={padProprieties.id === selectedPad.id}
        hasPadSelected={hasPadSelected}
      >
        <img
          onClick={handleConfigurablePadClick}
          className={
            padProprieties.iconPath === padProprieties.alternativeIconPath
              ? 'padding-on'
              : ''
          }
          src={padProprieties.iconPath}
          alt="icon"
        />
        <SettingsAndDeleteContainer
          isActive={selectedPad.id === padProprieties.id}
        >
          <SettingsIcon onClick={handleConfigurationButtonClick} />
          <VerticalSeparationLine />
          <DeleteIcon onClick={handleDeletePad} />
        </SettingsAndDeleteContainer>
      </ConfigurablePad>
      <PadConfigurationModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        pad={padProprieties}
        setPadProperties={handleUpdatePad}
      />
    </>
  ) : (
    <EmptyPad ref={dropRef} hasPadSelected={hasPadSelected} />
  )
}
