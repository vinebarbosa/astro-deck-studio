import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 70px;
  height: 70px;
  border-radius: 15px;
  border: 3px solid ${({ theme }) => darken(0.1, theme.colors.secondary)};
`
