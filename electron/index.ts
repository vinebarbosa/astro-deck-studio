// Native
import { join } from 'path';

import { BrowserWindow, app } from 'electron';
import isDev from 'electron-is-dev';


function createWindow() {
  const window = new BrowserWindow({
    minWidth: 900,
    minHeight: 600,
    frame: false,
    show: true,
    resizable: true,
    fullscreenable: true
  });

  const url = isDev ? `http://localhost:3000` : join(__dirname, '../src/out/index.html');

  // and load the index.html of the app.
  if (isDev) {
    window?.loadURL(url);
  } else {
    window?.loadFile(url);
  }
  // Open the DevTools.
  // window.webContents.openDevTools();

}

app.whenReady().then(() => {
  createWindow();
});

