export interface PadProps {
  id: string
  index: number
  iconPath: string
  alternativeIconPath: string
  label: string
  command: {
    type: string
    category: string
    content: any
  }
}
