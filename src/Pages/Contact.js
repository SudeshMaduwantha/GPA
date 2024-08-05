import React from 'react'
import Header from '../components/Header'
import { Outlet,Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'red' }}>Contact</h1>
      <>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/blogs" style={{ textDecoration: 'none', color: 'inherit' }}>Blogs</Link>
          </li>
          
          <li style={{ display: 'inline' }}>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
          </li>
        </ul>
        <Outlet />
      </>
    </div>
  )
}
