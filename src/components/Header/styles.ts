import styled, { css } from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 40px;
  position: relative;

  -webkit-user-select: none;
  -webkit-app-region: drag;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
`

export const Title = styled.strong`
  align-self: center;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${(props) => props.theme.colors.secondary};
`

interface WindowActionsProps {
  position: 'left' | 'right'
  shouldShowIconsOnHover?: boolean
}

export const WindowActions = styled.div<WindowActionsProps>`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;

  ${(props) =>
    props.position === 'left'
      ? css`
          left: 0px;
        `
      : css`
          right: 0px;
        `};
  ${(props) =>
    props.shouldShowIconsOnHover &&
    css`
      &:hover svg {
        display: block;
      }
    `}
`

export const ActionButton = styled.button`
  background: transparent;
  -webkit-app-region: no-drag;
  border: 0;
  display: flex;
  height: 100%;
  width: 35px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};

  &:hover svg {
    color: ${(props) => props.theme.colors.text};
  }

  &:active {
    opacity: 0.6;
  }

  &:focus {
    outline: 0;
  }
`
