import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';

import { ipcRenderer } from 'electron';

import Root from './containers/Root';
import configureStore from './store/configureStore';
import './app.global.css';

import { OPENFOLDER } from './constants/ipcClient';
import { openImageFolder } from './actions/fileIO';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

ipcRenderer.on(OPENFOLDER, (e, filepath) => {
  store.dispatch(openImageFolder(filepath));
});


render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
