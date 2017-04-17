// @flow

import { types } from '../actions/fileIO';
import { Action, ImageDescriptor } from '../utils/types';

export type State = {
  currentImageFolder: string | null,
  images: Array<ImageDescriptor>
};

const defaultImages = [
  {
    imagePath: '/home/sbnull/mpv-shot0001.jpg',
    fileName: 'mpv-shot0001.jpg',
    pageNo: 1,
  },
  {
    imagePath: '/home/sbnull/mpv-shot0002.jpg',
    fileName: 'mpv-shot0002.jpg',
    pageNo: 2,
  },
  {
    imagePath: '/home/sbnull/mpv-shot0003.jpg',
    fileName: 'mpv-shot0003.jpg',
    pageNo: 3,
  },
  {
    imagePath: '/home/sbnull/mpv-shot0001.jpg',
    fileName: 'mpv-shot0001.jpg',
    pageNo: 4,
  },
  {
    imagePath: '/home/sbnull/mpv-shot0002.jpg',
    fileName: 'mpv-shot0002.jpg',
    pageNo: 5,
  },
  {
    imagePath: '/home/sbnull/mpv-shot0003.jpg',
    fileName: 'mpv-shot0003.jpg',
    pageNo: 6,
  },
  {
    imagePath: '/home/sbnull/mpv-shot0001.jpg',
    fileName: 'mpv-shot0001.jpg',
    pageNo: 7,
  },
  {
    imagePath: '/home/sbnull/mpv-shot0002.jpg',
    fileName: 'mpv-shot0002.jpg',
    pageNo: 8,
  },
  {
    imagePath: '/home/sbnull/mpv-shot0003.jpg',
    fileName: 'mpv-shot0003.jpg',
    pageNo: 9,
  },
  {
    imagePath: '/home/sbnull/mpv-shot0001.jpg',
    fileName: 'mpv-shot0001.jpg',
    pageNo: 10,
  },
  {
    imagePath: '/home/sbnull/mpv-shot0002.jpg',
    fileName: 'mpv-shot0002.jpg',
    pageNo: 11,
  },
  {
    imagePath: '/home/sbnull/mpv-shot0003.jpg',
    fileName: 'mpv-shot0003.jpg',
    pageNo: 12,
  },
];


const defaultState = {
  currentImageFolder: null,
  images: []
};

export default (state: State = defaultState, action: Action) => {
  if (action.error) {
    console.log(action.payload);
    return state;
  }
  switch (action.type) {
    case types.setOpenedImageFolder: {
      const {
        folderPath,
        images
      } = action.payload;
      return { ...state, currentImageFolder: folderPath, images };
    }
    default: {
      return state;
    }
  }
};

// export const getCurrentOpenFile = (state: State) => '';
export const getCurrentImageFolder = (state: State) => state.currentImageFolder;
export const getImages = (state: State) => state.images;
