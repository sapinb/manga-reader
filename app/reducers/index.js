// @flow

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import fileIO, * as fromFileIO from './fileIO';

export type State = {
  routing: any,
  fileIO: fromFileIO.State
};

const rootReducer = combineReducers({
  routing,
  fileIO
});

export default rootReducer;

export const getCurrentImageFolder = (state: State) =>
  fromFileIO.getCurrentImageFolder(state.fileIO);
export const getImages = (state: State) => fromFileIO.getImages(state.fileIO);

