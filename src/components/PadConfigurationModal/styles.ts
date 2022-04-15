import styled from 'styled-components'
import { MdArrowBack } from 'react-icons/md'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  align-self: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.bold};
`

export const BackButton = styled(MdArrowBack)`
  position: absolute;
  left: 2.5rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`
