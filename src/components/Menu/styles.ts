import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 80%;
  -webkit-app-region: no-drag;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
