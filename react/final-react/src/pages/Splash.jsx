import React from 'react'

function Splash(props) {
  const styles = {
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    startButton: {
      border: 'none',
      borderRadius: '7px',
      background: 'navy',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '10rem',
      height: '3rem',
      cursor: 'pointer',
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={{ margin: '-0.5rem' }}>Quizzical</h1>
      <p>Some description if needed</p>

      <button style={styles.startButton} onClick={props.onStart}>Start quiz</button>
    </div>
  )
}

export default Splash