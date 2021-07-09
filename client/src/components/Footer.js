import React from 'react'

function Footer() {
  const footerStyle = {
    backgroundColor: '#434c5e',
    marginTop: '120px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <div style={footerStyle}>
      <h3>Viking Tap Room</h3>
      <span>&nbsp;-&nbsp;</span>
      <p>&copy; 2021 <a href="https://github.com/usarneme" target="_blank" rel="noopener noreferrer">Tom/Usarneme</a></p>
    </div>
  )
}
export default Footer
