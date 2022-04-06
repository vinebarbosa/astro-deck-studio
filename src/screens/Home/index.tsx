import React, { useState } from 'react'
import SettingsModal from 'react-modal'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
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

import { data } from './data'

SettingsModal.setAppElement('#root')

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenSettingsModal() {
    setIsOpen(true)
  }

  function handleCloseSettingsModal() {
    setIsOpen(false)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Container applyOverlayBlur={isOpen}>
        <SideBar>
          <Title>Ações</Title>
          <Drawer />
        </SideBar>
        <PadsArea>
          <TopArea>
            <ProfileSelectArea>
              <Text>Perfil Padrão</Text>
              <ArrowIcon />
            </ProfileSelectArea>
            <SettingsAndNotificationsContainer>
              <NotificationsIcon />
              <SettingsIcon onClick={handleOpenSettingsModal} />
            </SettingsAndNotificationsContainer>
          </TopArea>
          <Pads>
            {data.map((item, index) => (
              <Pad key={index} data={item} />
            ))}
          </Pads>
        </PadsArea>
        <SettingsModal
          isOpen={isOpen}
          onRequestClose={handleCloseSettingsModal}
          className="settings-modal"
          overlayClassName="settings-modal-overlay"
        >
          <Title>Configurações do Botão</Title>
        </SettingsModal>
      </Container>
    </DndProvider>
  )
}

export default Home
