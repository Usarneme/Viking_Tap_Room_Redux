import React from 'react'

function Footer() {
  const footerStyle = {
    backgroundColor: 'rgb(76, 195, 255)',
    marginTop: '120px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <div style={footerStyle}>
      <h3>Viking Tap Room</h3>
      <span>&nbsp;-&nbsp;</span>
      <p>&copy; 2021 <a href="https://github.com/usarneme" target="_blank">Tom/Usarneme</a></p>
    </div>
  )
}
export default Footer
