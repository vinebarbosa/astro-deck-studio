import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { MdSettings, MdDelete } from 'react-icons/md'

interface PadProps {
  isSelected?: boolean
  hasPadSelected: boolean
}

export const EmptyPad = styled.div<PadProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 70px;
  height: 70px;
  border-radius: 15px;
  border: 3px solid ${({ theme }) => darken(0.1, theme.colors.secondary)};
  opacity: ${({ hasPadSelected }) => (!hasPadSelected ? 1 : 0.5)};
`

export const ConfigurablePad = styled.div<PadProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 70px;
  height: 70px;
  border-radius: 15px;
  border: 3px solid ${({ theme }) => darken(0.1, theme.colors.secondary)};
  position: relative;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 3px solid ${({ theme }) => theme.colors.text};
    `}

  ${({ hasPadSelected, isSelected }) =>
    hasPadSelected &&
    !isSelected &&
    css`
      opacity: 0.5;
    `}

  img {
    width: 100%;
    height: 100%;
    user-select: none;
    -webkit-user-drag: none;

    &.padding-on {
      padding: 8px;
    }
  }
`

interface SettingsAndDeleteContainerProps {
  isActive: boolean
}

export const SettingsAndDeleteContainer = styled.div<SettingsAndDeleteContainerProps>`
  position: absolute;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  top: -50px;
  z-index: 99;
  height: 40px;
  width: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  border: 3px solid #fff;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
`

export const SettingsIcon = styled(MdSettings)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => darken(0.1, theme.colors.text)};
  }
`

export const DeleteIcon = styled(MdDelete)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => darken(0.1, theme.colors.text)};
  }
`

export const VerticalSeparationLine = styled.div`
  width: 2px;
  height: 75%;
  background-color: ${({ theme }) => theme.colors.text};
`
