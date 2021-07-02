import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const navbarStyles = {
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(2, 188px)',
    gridColumnGap: '11px',
    alignItems: 'center',
    marginBottom: '18px',
    background: 'rgba(255,255,255,0.6)',
    borderBottom: '2px groove #111',
    width: '100%'
  }

  const linkStyles = {
    padding: '24px',
    background: 'rgba(255,255,255,0.3)',
    borderRadius: '15px',
    textAlign: 'center',
  }

  return (
    <nav style={ navbarStyles }>
      <Link style={linkStyles} to="/">Home</Link>
      <Link style={linkStyles} to="/kegs">Kegs</Link>
    </nav>
  )
}

export default Navbar
