import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count }) => (
    <p className={styles.text}>Всего задач: {count}</p>
);

export default Footer;