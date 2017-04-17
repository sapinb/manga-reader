// @flow

import React from 'react';
// import type { Children } from 'react';

import Sidebar from './Sidebar';
import Statusbar from './Statusbar';
import Navbar from './Navbar';
import LongStripViewer from './LongStripViewer';

import styles from './App.css';

import { ImageDescriptor } from '../utils/types';

type AppProps = {
  images?: Array<ImageDescriptor>,
  showPageNo?: boolean
};

const App = ({
  images = [],
  showPageNo = true
}: AppProps) => (
  <div className={styles.Container}>
    <div className={styles.MainContent}>
      <Sidebar images={images} showPageNo={showPageNo} />
      <div className={styles.MainBody}>
        <Navbar />
        {images && images.length
        ? <LongStripViewer images={images} />
        : <NoImageScreen />}
      </div>
    </div>

    <Statusbar />
  </div>
);

const NoImageScreen = () => (
  <div className={styles.NoImageScreen}>
    <div className={styles.NoImageScreen__TextContainer}>
      No Images Found. Please Select a different Folder.
    </div>
  </div>
);

export default App;
