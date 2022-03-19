import React from 'react'
import Drawer from '../../components/Drawer'
import Pad from '../../components/Pad'
import { Container, SideBar, Title, Pads, PadsArea } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <Title>Ações</Title>
        <Drawer />
      </SideBar>
      <PadsArea>
        <Pads>
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
          <Pad />
        </Pads>
      </PadsArea>
    </Container>
  )
}

export default Home
