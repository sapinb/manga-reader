// @flow

import fs from 'fs';
import path from 'path';
import promisify from 'promisify-native';
import { includes } from 'lodash';
import naturalSort from 'javascript-natural-sort';

import { typePrefixer } from '../utils/reduxHelpers';
import { ImageDescriptor } from '../utils/types';

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const prefixed = typePrefixer('fileIO');

export const types = {
  setOpenedFile: prefixed('setOpenedFile'),
  setOpenedImageFolder: prefixed('setOpenedImageFolder'),
};

export const setOpenedFile = (filepath: string) => ({
  type: types.setOpenedFile,
  payload: filepath
});

export const setOpenedImageFolder = (folderPath: string, images: Array<ImageDescriptor>) => ({
  type: types.setOpenedImageFolder,
  payload: {
    folderPath,
    images
  }
});

const parseFilename = (fullFileName: string) => {
  const regRes = /(.*)\.([^.]*)/.exec(fullFileName);

  const [, filename, extension] = regRes || [null, null, null];

  return { filename, extension };
};

const validImageExtensions = ['jpg', 'jpeg', 'png'];

const isValidImageFile = (fullFileName: string) => {
  const { extension } = parseFilename(fullFileName);

  return includes(validImageExtensions, extension);
};

const getValidImageFiles = async (folderPath) => {
  const files: Array<string> = await readdir(folderPath);

  const filesWithStat: Array<{file: string, fullPath: string, isFile: boolean}> = await Promise.all(
      files
        .map(file => ({
          file,
          fullPath: path.join(folderPath, file)
        }))
        .map(async ({ file, fullPath }) => {
          try {
            const s = await stat(fullPath);
            return { file, fullPath, isFile: s.isFile() };
          } catch (e) {
            console.error(file, fullPath, e);
            return { file, fullPath, isFile: false };
          }
        })
      );

  const validFiles = filesWithStat
      .filter(f => f.isFile)
      .filter(f => isValidImageFile(f.file))
      .sort((a, b) => naturalSort(a.file, b.file));

  return validFiles;
};

export const openImageFolder = (folderPath: string) => async (dispatch, getState) => {
  try {
    const validFiles = await getValidImageFiles(folderPath);

    const images: Array<ImageDescriptor> = validFiles
      .map((f, idx) => ({
        fileName: f.file,
        imagePath: f.fullPath,
        pageNo: idx + 1
      }));

    // console.log(images);
    dispatch(setOpenedImageFolder(folderPath, images));
  } catch (e) {
    console.error('cannot read folder or some other error');
    console.error(e);
  }
};


