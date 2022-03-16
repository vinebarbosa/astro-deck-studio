import { contextBridge, ipcRenderer } from 'electron'

export const api = {
  maximize() {
    ipcRenderer.send('maximize')
  },
  minimize() {
    ipcRenderer.send('minimize')
  },
  close() {
    ipcRenderer.send('close')
  }
}

contextBridge.exposeInMainWorld('Main', api)
