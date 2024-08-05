// Home.js
import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>HOME</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="/blogs" className={styles.link}>Blogs</a>
        </li>
        <li className={styles.listItem}>
          <a href="/contact" className={styles.link}>Contact</a>
        </li>
        <li className={styles.listItem}>
          <a href="/about" className={styles.link}>About</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
