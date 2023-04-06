import React from 'react';
import styles from './Footer.module.scss';
import Downloads from '../Download';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Виробництво студії "M-G-Master"</p> Всі права захищені &copy;
      <Downloads />
    </footer>
  );
};

export default Footer;
