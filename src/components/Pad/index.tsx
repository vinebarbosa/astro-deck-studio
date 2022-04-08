import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { v4 as uuid } from 'uuid'

import { EmptyPad, _Pad } from './styles'
import { ActionDataProps } from '../../components/Drawer/drawerData'

import { api } from '../../services/api'
interface PadProps {
  data: ActionDataProps
  index: number
}

const Pad: React.FC<PadProps> = ({ data, index }) => {
  const [padProprieties, setPadProperties] = useState({} as ActionDataProps)
  // let padProprieties = data

  console.log(data)

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
    <_Pad>
      <img
        className={
          padProprieties.iconPath === padProprieties.alternativeIconPath
            ? 'padding-on'
            : ''
        }
        src={padProprieties.iconPath}
        alt=""
      />
    </_Pad>
  ) : (
    <EmptyPad ref={dropRef} />
  )
}

export default Pad
