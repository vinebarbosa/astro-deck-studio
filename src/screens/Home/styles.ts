import styled, { css } from 'styled-components'
import { MdSettings, MdNotifications } from 'react-icons/md'
import { FiChevronDown } from 'react-icons/fi'

interface ContainerProps {
  applyOverlayBlur: boolean
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 20px);
  background-color: ${({ theme }) => theme.colors.background};
  transition: filter 200ms ease-in-out;

  ${({ applyOverlayBlur }) =>
    applyOverlayBlur &&
    css`
      filter: blur(2px);
    `}
`

export const SideBar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
  width: 270px;
  padding-left: 10px;
  padding-right: 10px;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  padding: 16px 0;
  user-select: none;
`

export const PadsArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
`

export const TopArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 30px 60px;
`

export const ProfileSelectArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`

export const ArrowIcon = styled(FiChevronDown)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`

export const Pads = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 70px);
  grid-column-gap: 16px;
  grid-row-gap: 18px;
  justify-content: center;
  align-items: center;
  height: 250px;
`

export const SettingsAndNotificationsContainer = styled.div`
  display: flex;
`

export const SettingsIcon = styled(MdSettings)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 28px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`
export const NotificationsIcon = styled(MdNotifications)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 28px;
  margin-right: 8px;

  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`
