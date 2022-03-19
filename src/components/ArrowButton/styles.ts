import styled from 'styled-components'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export const DownIcon = styled(FiChevronDown)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
`
export const UpIcon = styled(FiChevronUp)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
`
