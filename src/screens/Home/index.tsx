import React, { SyntheticEvent, useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Menu } from '../../components/Menu'
import { Pad } from '../../components/Pad'
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
import { usePads } from '../../hooks/usePads'
import { PadProps } from '../../interfaces/padProps'

const Home: React.FC = () => {
  const [buttonsData, setButtonsData] = useState(data)
  const { setPad } = usePads()

  function handleOutsideClick(event: SyntheticEvent) {
    if (event.target === event.currentTarget) {
      setPad({} as PadProps)
    }
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
      <Container>
        <SideBar>
          <Title>Ações</Title>
          <Menu />
        </SideBar>
        <PadsArea onClick={handleOutsideClick}>
          <TopArea onClick={handleOutsideClick}>
            <ProfileSelectArea>
              <Text>Perfil Padrão</Text>
              <ArrowIcon />
            </ProfileSelectArea>
            <SettingsAndNotificationsContainer>
              <NotificationsIcon />
              <SettingsIcon />
            </SettingsAndNotificationsContainer>
          </TopArea>
          <Pads onClick={handleOutsideClick}>
            {buttonsData.map((item) => (
              <Pad key={item.index} data={item} index={item.index} />
            ))}
          </Pads>
        </PadsArea>
      </Container>
    </DndProvider>
  )
}

export default Home
