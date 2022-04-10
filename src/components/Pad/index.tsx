import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { v4 as uuid } from 'uuid'

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

  const { setPad, selectedPad, hasPadSelected } = usePads()

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
    data.id = uuid()
    data.index = index
    const response = await api.put('button', data)
    setPadProperties(response.data)
  }

  const [, dropRef] = useDrop({
    accept: 'ACTION',
    drop({ data }: Props) {
      handleUpdatePad(data)
    }
  })

  return padProprieties.id !== '' ? (
    <ConfigurablePad
      onClick={() => setPad(padProprieties)}
      isSelected={padProprieties.id === selectedPad.id}
      hasPadSelected={hasPadSelected}
    >
      <img
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
        <SettingsIcon />
        <VerticalSeparationLine />
        <DeleteIcon />
      </SettingsAndDeleteContainer>
    </ConfigurablePad>
  ) : (
    <EmptyPad ref={dropRef} hasPadSelected={hasPadSelected} />
  )
}
