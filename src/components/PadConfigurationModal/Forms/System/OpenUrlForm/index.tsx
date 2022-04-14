import React, { useState } from 'react'
import { PadProps } from '../../../../../interfaces/padProps'
import { IconUploader } from '../../../../IconUploader'

import { Container, FinalOrientation, InputContainer, Text } from './styles'

interface Props {
  pad: PadProps
  setProperties: (pad: PadProps) => void
}

export const OpenUrlForm: React.FC<Props> = ({ pad, setProperties }) => {
  const [active, setActive] = useState(false)
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    let url = event.target.value

    if (url.includes('http://')) url = url.replace('http://', '')
    if (url.includes('https://')) url = url.replace('https://', '')
    if (url.charAt(url.length - 1) === '/') url = url.slice(0, -1)

    setProperties({
      ...pad,
      command: {
        ...pad.command,
        content: url
      }
    })
  }

  return (
    <Container>
      <IconUploader />
      <InputContainer>
        <Text side="right">Digite a URL:</Text>
        <input
          value={pad.command.content}
          placeholder="url"
          onChange={handleChange}
          onClick={() => setActive(true)}
          onBlur={() => setActive(false)}
          className={active ? 'active' : ''}
        />
      </InputContainer>
      <FinalOrientation>
        As alterações são salvas altomaticamente
      </FinalOrientation>
    </Container>
  )
}
