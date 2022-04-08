import React, { useEffect, useState } from 'react'
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

import { api } from '../../services/api'

import { data } from './data'

SettingsModal.setAppElement('#root')

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [buttonsData, setButtonsData] = useState(data)

  function handleOpenSettingsModal() {
    setIsOpen(true)
  }

  function handleCloseSettingsModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    async function loadButtons() {
      const response = await api.get('buttons')
      setButtonsData(response.data)
    }
    loadButtons()
  }, [])

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
            {buttonsData.map((item) => (
              <Pad key={item.index} data={item} index={item.index} />
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
