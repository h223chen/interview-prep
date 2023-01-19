import React from 'react'

function Social() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem'
    },    
    button: {
      borderRadius: '7px',
      width: '40%',
      height: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    emailButton: {
      background: 'white',      
    },
    linkedInButton: {
      background: 'skyblue',
    }
  }
  const emailHandler = (e) => {
    e.preventDefault()
    alert('email pressed!')
  }

  const linkedInHandler = (e) => {
    e.preventDefault()
    alert('linkedIn pressed!')
  }

  return (
    <div style={styles.container}>
      <div style={{...styles.button, ...styles.emailButton}} onClick={emailHandler}>
        <span>Email</span>
      </div>
      <div style={{...styles.button, ...styles.linkedInButton}} onClick={linkedInHandler}>
        <span>LinkedIn</span>
      </div>
    </div>
  )
}

export default Social