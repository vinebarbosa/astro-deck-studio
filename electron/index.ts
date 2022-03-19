import { BrowserWindow, app, ipcMain, nativeImage } from 'electron'
import isDev from 'electron-is-dev'
import { join } from 'path'

function createWindow() {
  const icon = nativeImage.createFromPath(
    `${app.getAppPath()}/.github/icon.png`
  )

  const window = new BrowserWindow({
    minWidth: 900,
    minHeight: 600,
    frame: false,
    resizable: true,
    fullscreenable: true,
    transparent: true,
    webPreferences: {
      preload: join(__dirname, 'preload.js')
    },
    icon: icon
  })

  const url = isDev
    ? `http://localhost:3000`
    : join(__dirname, '../build/index.html')

  if (isDev) {
    window?.loadURL(url)
    // window?.webContents.openDevTools()
  } else {
    window?.loadFile(url)
  }

  ipcMain.on('minimize', () => {
    window.minimize()
  })

  ipcMain.on('maximize', () => {
    window.isMaximized() ? window.unmaximize() : window.maximize()
  })

  ipcMain.on('close', () => {
    window.close()
  })
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})
