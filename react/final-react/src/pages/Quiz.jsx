import React, { useState } from 'react'

import { nanoid } from 'nanoid'

import Question from '../components/quiz/Question'
import data from '../questions.json'

function Quiz() {  
  const styles = {
    container: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '2rem 4rem',
      // alignItems: 'center',
    },
    button: {
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

  const [questions, setQuestions] = useState(initQuestions())
  const [checking, setChecking] = useState(false)

  function initQuestions() {
    let questions = []

    data.map((question) => {
      questions.push({
        id: nanoid(),
        prompt: question.question,
        options: question.options.map((option) => ({
          id: nanoid(),
          label: option,
          isSelected: false,
          isCorrect: question.answer === option,
        }))        
      })
    })

    return questions
  }

  function selectOption(event, questionId, optionId, value) {
    setQuestions((prev) => {
      return prev.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            options: question.options.map((option) => {
              if (option.id === optionId) {
                return {
                  ...option,
                  isSelected: true,
                }
              } else {
                return {
                  ...option,
                  isSelected: false,
                }
              }
            })
          }
        } else {
          return question
        }
      })
    })
  }

  return (
    <div style={styles.container}>
      {
        questions.map((question) => {
          return <Question
            key={question.id}
            id={question.id}
            prompt={question.prompt}
            options={question.options}
            selectOption={selectOption}
            checking={checking}
          />
        })
      }

      <button style={styles.button} onClick={() => { setChecking(true) }}>Check answers</button>
    </div>
  )
}

export default Quiz
