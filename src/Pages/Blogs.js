import React from 'react'
import Header from '../components/Header'
import { Outlet,Link } from 'react-router-dom'
import blog from './Blogs.module.css'
import styles from './Home.module.scss';

function Blogs() {
  return (
    <div className={blog.container}>

      <h1 className={blog.header}>Blogs</h1>
      <ul className={blog.list}>
        <li className={blog.listItem}>
          <a href="/" className={styles.link}>Home</a>
        </li>
        <li className={blog.listItem}>
          <a href="/contact" className={styles.link}>Contact</a>
        </li>
        <li className={blog.listItem}>
          <a href="/about" className={styles.link}>About</a>
        </li>
      </ul>
      </div>
  )
}

export default Blogs
