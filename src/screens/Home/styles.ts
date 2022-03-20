import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 20px);
  background-color: ${({ theme }) => theme.colors.background};
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
  justify-content: center;
`

export const Pads = styled.div`
  display: grid;
  grid-template-columns: 70px 70px 70px 70px 70px;
  grid-column-gap: 16px;
  grid-row-gap: 18px;
  align-content: center;
  justify-content: center;
  height: 500px;
`
