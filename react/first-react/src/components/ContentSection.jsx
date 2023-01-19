import React from 'react'

function ContentSection({title, body}) {
  const styles = {
    container: {
      margin: '2rem',
    },
    title: {
      color: 'white',
      marginBottom: '-10px',
    },
    body: {
      color: 'white'
    }
  }
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.body}>{body}</p>
    </div>    
  )
}

export default ContentSection