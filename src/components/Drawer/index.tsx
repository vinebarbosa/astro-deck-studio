import React from 'react'
import ActionsGroup from '../../components/ActionsGroup'
import { Container } from './styles'
import { data } from './drawerData'

const Drawer: React.FC = () => {
  return (
    <Container>
      {data.map((actionGroup, index) => (
        <ActionsGroup
          key={index}
          iconPath={actionGroup.path}
          label={actionGroup.slug}
          actions={actionGroup.actions}
        />
      ))}
    </Container>
  )
}

export default Drawer
