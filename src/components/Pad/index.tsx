import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { v4 as uuid } from 'uuid'

import { EmptyPad, _Pad } from './styles'
import { ActionDataProps } from '../../components/Drawer/drawerData'

interface PadProps {
  data: ActionDataProps
}

const Pad: React.FC<PadProps> = ({ data }) => {
  const [padProprieties, setPadProperties] = useState(data)

  const [, dropRef] = useDrop({
    accept: 'ACTION',
    drop({ data }: PadProps, monitor) {
      data.id = uuid()
      setPadProperties(data)
    }
  })

  return padProprieties.id !== '' ? (
    <_Pad>
      <img src={padProprieties.iconPath} alt="" />
    </_Pad>
  ) : (
    <EmptyPad ref={dropRef} />
  )
}

export default Pad
