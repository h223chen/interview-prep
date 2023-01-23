import React from 'react'

import Option from './Option'

function Question(props) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      borderBottom: '1px solid grey',
    },
    optionsContainer: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1rem',
    }
  }

  return (
    <div style={styles.container}>
      <b style={{ marginBottom: '1rem'}}>{props.prompt}</b>

      <div style={styles.optionsContainer} >
        {
          props.options.map((option) => {
            return <Option 
              key={option.id}
              label={option.label}
              isCorrect={option.isCorrect}
              isSelected={option.isSelected}
              selectOption={(event) => { props.selectOption(event, props.id, option.id, option.label) }}
              checking={props.checking}
            />
          })
        }
      </div>
    </div>
  )
}

export default Question