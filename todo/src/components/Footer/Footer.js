import React from 'react';
import propTypes from 'prop-types';

import styles from './Footer.module.css';

const Footer = ({ count }) => (
  <div className={styles.footerWrap}>
    <p className={styles.text}>Всего задач: {count}</p>
  </div>
);

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: propTypes.number
};

export default Footer;