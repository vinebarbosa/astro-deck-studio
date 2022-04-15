import styled, { css } from 'styled-components'

interface ActionProps {
  isDragging: boolean
}

export const Container = styled.div<ActionProps>`
  display: flex;
  flex: 1;
  padding: 10px 40px;
  align-items: center;
  border-radius: 5px;
  cursor: grab;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  img {
    height: 24px;
    min-width: 24px;
    margin-right: 10px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
  }

  ${({ isDragging }) =>
    isDragging &&
    css`
      cursor: grabbing;
    `}
`
