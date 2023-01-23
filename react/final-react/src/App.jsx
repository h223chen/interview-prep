import React, { useState } from 'react'

import Splash from './pages/Splash'
import Quiz from './pages/Quiz'

function App() {
  const [started, setStarted] = useState(false)

  function onStart() {
    setStarted(true)
  }

  return (
    !started ? <Splash onStart={onStart}/> : <Quiz />
  )
}

export default App
