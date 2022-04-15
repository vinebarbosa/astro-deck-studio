import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
  width: 40%;
  flex-direction: column;
  border: 2px dashed ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
  padding: 20px;
`

export const Uploader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 90px;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  margin-bottom: 0.5rem;
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
