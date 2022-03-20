import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: 18px;
  padding: 10px 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  transition: 200ms background-color;

  & + & {
    margin-top: 5px;
  }
`

interface IconProps {
  path?: string
}

const icon = styled.img<IconProps>``

export const Icon = styled(icon).attrs(({ path }: IconProps) => {
  return {
    src: path
  }
})`
  height: 24px;
  width: 24px;
  margin-left: 10px;
  margin-right: 10px;
  user-select: none;
  pointer-events: none;
`

interface LabelProps {
  text: string
}

const label = styled.p<LabelProps>``

export const Label = styled(label).attrs(({ text }: LabelProps) => {
  return {
    children: text
  }
})`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  user-select: none;
`
