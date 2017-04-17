import { dialog } from 'electron';

import { OPENFOLDER } from '../constants/ipcClient';

export const openFolder = (mainWindow) => {
  const options = {
    properties: ['openDirectory'],
  };
  console.log('dialog');
  dialog.showOpenDialog(options, fileList => {
    const filePath = fileList && fileList[0];

    if (!filePath) {
      return;
    }

    mainWindow.webContents.send(OPENFOLDER, filePath);
  });
};
