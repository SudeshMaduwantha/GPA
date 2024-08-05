import React from 'react'
import Header from '../components/Header'
import { Outlet,Link } from 'react-router-dom'

export default function About() {
  const myStyle={
    color:"white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  }

  return (
    <div style={{ textAlign: 'center' }}>
      
      <>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/blogs" style={{ textDecoration: 'none', color: 'inherit' }}>Blogs</Link>
          </li>
          
          <li style={{ display: 'inline' }}>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
          </li>
        </ul>
        <Outlet />
      </>
      <div>
          <>
            <h1 style={myStyle}>About US</h1>
            <p>Do you know about our company?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </>
      </div>
    </div>
    
  )
}
