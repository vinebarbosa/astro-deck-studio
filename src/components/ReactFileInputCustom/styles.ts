import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  font-weight: 650;
  border: 0;
  outline: 0;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`
