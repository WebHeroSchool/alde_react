import React from 'react';
import propTypes from 'prop-types';

import styles from './Footer.module.css';

const Footer = ({ count, complete }) => (
  <div className={styles.footerWrap}>
    <p className={styles.text}>Невыполнено: {count}</p>
    <p className={styles.text}>Выполнено: {complete}</p>
  </div>
);

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: propTypes.number
};

export default Footer;