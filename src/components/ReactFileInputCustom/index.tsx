import React, { useCallback, useRef } from 'react'
import { FiUpload } from 'react-icons/fi'
import { theme } from '../../styles/theme'
import { Button } from './styles'

export type ReactFileInputTypes = {
  handleChange?: (event: InputEvent) => void
  acceptedExtensions?: string
  backgroundColor?: string
  textColor?: string
  text?: string
  width?: string
  classes?: string
}

export const ReactFileInputCustom: React.FC<ReactFileInputTypes> = ({
  handleChange,
  acceptedExtensions,
  backgroundColor = '#3699ff',
  textColor = '#fff',
  text = '',
  width = '250px',
  classes,
  ...props
}) => {
  const inputFileRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const handleClick = useCallback(() => {
    if (inputFileRef && inputFileRef.current) {
      inputFileRef.current.click()
    }
  }, [])

  const handleChangeFile = useCallback(
    (event) => {
      if (handleChange) {
        handleChange(event)
      }
    },
    [handleChange]
  )

  return (
    <>
      <Button
        type="button"
        onClick={handleClick}
        className={classes}
        style={{ background: backgroundColor, color: textColor, width: width }}
      >
        <FiUpload size={48} color={theme.colors.text} />
      </Button>
      <input
        type="file"
        accept={acceptedExtensions}
        ref={inputFileRef}
        style={{ display: 'none' }}
        onChange={handleChangeFile}
        {...props}
      />
    </>
  )
}
