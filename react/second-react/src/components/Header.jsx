import React from 'react'

import logo from '../assets/react.svg'

function Header() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'red',
      padding: '1rem',
    },
    title: {
      color: 'white',
      paddingLeft: '0.5rem',
    }
  }
  return (
    <div style={styles.container}>
      <img src={logo} width={20} />
      <span style={styles.title}>my travel journal.</span>
    </div>
  )
}

export default Header