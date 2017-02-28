import { app, BrowserWindow } from 'electron';
import path from 'path';

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 768
  });

  mainWindow.loadURL(path.join('file://', __dirname, 'public', 'electron-project', 'index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});