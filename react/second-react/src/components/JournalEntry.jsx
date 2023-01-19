import React from 'react'

function JournalEntry({
  title, 
  location, 
  link, 
  startDate, 
  endDate,
  desc,
  imageUrl
}) {
  const strings = {
    googleMaps: 'View on Google Maps'
  }
  const styles = {    
    container: {
      display: 'flex',
      margin: '1rem',
    },
    photo: {
      width: '10rem',
      borderRadius: '1rem',
      marginRight: '1rem',
    },
    content: {
      margin: '1rem',
    }
  }

  return (
    <div style={styles.container}>
      <img src={imageUrl} alt='photo' style={styles.photo} />
      <div style={styles.content}>
        <div>
          {location} <a href={link}>{strings.googleMaps}</a>
        </div>
        <h1>{title}</h1>
        <span>{startDate} - {endDate}</span>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default JournalEntry