import React from 'react'

function BasicInfo() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      color: 'white',
      margin: 0,
    },
    role: {
      color: 'orange',
      margin: '5px',
    },
    link: {
      color: 'white',
      margin: '10px',
    }
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.name}>Laura Smith</h1>
      <h3 style={styles.role}>Frontend Developer</h3>
      <h4 style={styles.link}>website link</h4>
    </div>
  )
}

export default BasicInfo