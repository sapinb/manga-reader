// @flow
import React from 'react';
import { ImageDescriptor } from '../utils/types';
import styles from './LongStripViewer.css';

type Props = {
  images?: Array<ImageDescriptor>,
  showPageNo?: boolean
};

type ImageThumbnailProps = {
  imagePath: string,
  fileName: string,
  pageNo: number,
  showPageNo: boolean
};

const ImageContainer = ({ imagePath, fileName, pageNo, showPageNo }: ImageThumbnailProps) => (
  <div className={styles.ImageContainer} title={fileName}>
    <img src={imagePath} className={styles.ImageContainer__img} alt={fileName} />
    {showPageNo && <span className={styles.PageNo}>{pageNo}</span>}
  </div>
);

const LongStripViewer = ({
  images = [],
  showPageNo = false
}: Props) => (
  <div className={styles.ImageViewer}>
    {images.map(image => <ImageContainer key={image.pageNo} {...image} showPageNo={showPageNo} />)}
  </div>
);

export default LongStripViewer;
