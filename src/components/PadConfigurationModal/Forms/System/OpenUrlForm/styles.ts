import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 40%;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  input {
    display: flex;
    flex: 1;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    background-color: transparent;
    height: 50px;
    color: ${({ theme }) => theme.colors.text};
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;

    transition: border 0.2s ease-in-out;

    &.active {
      border: 2px solid ${({ theme }) => theme.colors.text};
    }
  }
`

interface TextProps {
  side?: 'left' | 'right'
}

export const Text = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  ${({ side }) => {
    switch (side) {
      case 'left':
        return css`
          margin-left: 10px;
        `
      case 'right':
        return css`
          margin-right: 10px;
        `
      default:
        return css``
    }
  }}
`

export const FinalOrientation = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 2%;
`
