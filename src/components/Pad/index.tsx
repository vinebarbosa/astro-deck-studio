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

import { ActionDataProps } from '../../components/Drawer/drawerData'

import { usePads } from '../../hooks/usePads'
import { api } from '../../services/api'
interface PadProps {
  data: ActionDataProps
  index: number
}

const Pad: React.FC<PadProps> = ({ data, index }) => {
  const [padProprieties, setPadProperties] = useState({} as ActionDataProps)

  const { handleSelectPad, selectedPad, hasPadSelected } = usePads()

  useEffect(() => {
    setPadProperties(data)
  }, [data])

  async function handleUpdatePad(data: ActionDataProps) {
    data.id = uuid()
    data.index = index
    const response = await api.put('button', data)
    setPadProperties(response.data)
  }

  const [, dropRef] = useDrop({
    accept: 'ACTION',
    drop({ data }: PadProps) {
      handleUpdatePad(data)
    }
  })

  return padProprieties.id !== '' ? (
    <ConfigurablePad
      onClick={() => handleSelectPad(padProprieties)}
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

export default Pad
