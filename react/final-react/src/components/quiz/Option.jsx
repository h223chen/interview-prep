import React from 'react'

function Option(props) {
  const styles = {
    option: {
      border: '1px solid darkblue',
      borderRadius: '7px',
      padding: '0.2rem 1rem',
      cursor: 'pointer',
    }
  }
  return (
    <div style={{
      ...styles.option,
      background: `${ props.checking ?
      props.isCorrect ? 'green' : props.isSelected ? 'red' : 'none' : 
      props.isSelected ? 'lavender' : 'none' }`
    }} onClick={props.selectOption}>{props.label}</div>
  )
}

export default Option