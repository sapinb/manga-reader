import React from 'react';
import styles from './Navbar.css';

import FAIcon from './FAIcon';

const NavBarButton = ({
  iconName,
  onClick = () => {},
}) => (
  <span className={styles.NavbarButton}>
    <FAIcon name={iconName} />
  </span>
);

const Navbar = () => (
  <div className={styles.Navbar}>
    <NavBarButton iconName="fa-angle-left" />
    <NavBarButton iconName="fa-folder-open-o" />
  </div>
);

export default Navbar;
