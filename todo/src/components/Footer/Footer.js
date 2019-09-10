import React from "react";

import styles from "./Footer.module.css";

const Footer = ({ count }) => (
  <div className={styles.footerWrap}>
    <p className={styles.text}>Всего задач: {count}</p>
  </div>
);

Footer.defaultProps = {
  count: 0
};

export default Footer;
