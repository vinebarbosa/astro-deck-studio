import React from 'react'
import ActionsGroup from '../../components/ActionsGroup'
import Pad from '../../components/Pad'
import { Container, SideBar, Title, Pads, PadsArea } from './styles'
import windowsImage from '../../assets/img/windows.png'
import discordImage from '../../assets/img/discord.png'
import spotifyImage from '../../assets/img/spotify.png'

const Home: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <Title>Ações</Title>
        <ActionsGroup iconPath={windowsImage} label="Sistema" />
        <ActionsGroup iconPath={discordImage} label="Discord" />
        <ActionsGroup iconPath={spotifyImage} label="Spotify" />
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
