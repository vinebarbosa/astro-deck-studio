import styled from 'styled-components'
import { darken } from 'polished'

export const EmptyPad = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 70px;
  height: 70px;
  border-radius: 15px;
  border: 3px solid ${({ theme }) => darken(0.1, theme.colors.secondary)};
`

export const _Pad = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 70px;
  height: 70px;
  border-radius: 15px;
  border: 3px solid ${({ theme }) => darken(0.1, theme.colors.secondary)};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

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
