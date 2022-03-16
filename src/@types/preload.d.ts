import { api } from '../../electron/preload'

declare global {
  // eslint-disable-next-line
  interface Window {
    Main: typeof api
  }
}
