import React, { useState } from 'react'
import SettingsModal from 'react-modal'
import Drawer from '../../components/Drawer'
import Pad from '../../components/Pad'
import {
  Container,
  SideBar,
  Title,
  PadsArea,
  Pads,
  TopArea,
  ProfileSelectArea,
  Text,
  ArrowIcon,
  SettingsAndNotificationsContainer,
  NotificationsIcon,
  SettingsIcon
} from './styles'

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenSettingsModal() {
    setIsOpen(true)
  }

  function handleCloseSettingsModal() {
    setIsOpen(false)
  }

  return (
    <Container applyOverlayBlur={isOpen}>
      <SideBar>
        <Title>Ações</Title>
        <Drawer />
      </SideBar>
      <PadsArea>
        <TopArea>
          <ProfileSelectArea>
            <Text>Perfil de Trabalho</Text>
            <ArrowIcon />
          </ProfileSelectArea>
          <SettingsAndNotificationsContainer>
            <NotificationsIcon />
            <SettingsIcon onClick={handleOpenSettingsModal} />
          </SettingsAndNotificationsContainer>
        </TopArea>
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
      <SettingsModal
        isOpen={isOpen}
        onRequestClose={handleCloseSettingsModal}
        className="settings-modal"
        overlayClassName="settings-modal-overlay"
      >
        <Title>Teste</Title>
      </SettingsModal>
    </Container>
  )
}

export default Home
