import React, { useState } from 'react'
import { useDrop } from 'react-dnd'

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
      data.id = '1213'
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
