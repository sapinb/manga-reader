// @flow
import React from 'react';
import styles from './Sidebar.css';

import { ImageDescriptor } from '../utils/types';

type ImageThumbnailProps = {
  imagePath: string,
  fileName: string,
  pageNo: number,
  showPageNo: boolean
};

type SidebarProps = {
  images: Array<ImageDescriptor>,
  showPageNo: boolean
};

const ImageThumbnail = ({ imagePath, fileName, pageNo, showPageNo }: ImageThumbnailProps) => (
  <div className={styles.ImageThumbnail} title={fileName}>
    <img src={imagePath} className={styles.ImageThumbnail__img} alt={fileName} />
    {showPageNo && <span className={styles.PageNo}>{pageNo}</span>}
  </div>
);

const Header = () => (
  <div className={styles.Header}></div>
);

const Sidebar = ({ images, showPageNo }: SidebarProps) => (
  <div className={styles.Sidebar}>
    <Header />
    <div className={styles.ImageThumbContainer}>
      {images.map(image => (
        <ImageThumbnail key={image.pageNo} {...image} showPageNo={showPageNo} />
      ))}
    </div>
  </div>
);

export default Sidebar;
