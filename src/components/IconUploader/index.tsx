import React from 'react'
import { ReactFileInputCustom } from '../ReactFileInputCustom'

import { Container, Text, Uploader } from './styles'
import { theme } from '../../styles/theme'

export const IconUploader: React.FC = () => {
  const [, setFile] = React.useState<File | null>(null)

  const handleChange = (event: InputEvent) => {
    const input = event.target as HTMLInputElement
    const files = input.files

    if (files && files.length) {
      setFile(files[0])
    }
  }

  return (
    <Container>
      <Uploader>
        <ReactFileInputCustom
          handleChange={handleChange}
          backgroundColor={theme.colors.primary}
          acceptedExtensions={'.png,.jpg,.jpeg'}
        />
      </Uploader>
      <Text>Clique para fazer upload de um ícone</Text>
      <Text>(Opcional)</Text>
    </Container>
  )
}
