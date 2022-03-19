import React from 'react'
import ActionsGroup from '../../components/ActionsGroup'
import { Container } from './styles'
import { data } from './drawerData'

const Drawer: React.FC = () => {
  return (
    <Container>
      {data.map((actionGroup) => (
        <ActionsGroup
          key={actionGroup.key}
          iconPath={actionGroup.path}
          label={actionGroup.slug}
        />
      ))}
    </Container>
  )
}

export default Drawer
