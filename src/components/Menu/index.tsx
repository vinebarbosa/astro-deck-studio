import React from 'react'
import SubMenu from '../../components/SubMenu'
import { Container } from './styles'
import { data } from './menuData'

export const Menu: React.FC = () => {
  return (
    <Container>
      {data.map((actionGroup, index) => (
        <SubMenu
          key={index}
          iconPath={actionGroup.path}
          label={actionGroup.slug}
          actions={actionGroup.actions}
        />
      ))}
    </Container>
  )
}
