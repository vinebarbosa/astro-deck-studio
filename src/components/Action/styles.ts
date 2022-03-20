import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 10px 40px;
  align-items: center;
  border-radius: 5px;

  user-select: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  img {
    height: 24px;
    min-width: 24px;
    margin-right: 10px;
    -webkit-app-region: no-drag;
    pointer-events: none;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
  }
`
