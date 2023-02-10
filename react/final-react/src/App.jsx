import { useSelector } from 'react-redux'

import { SCREENS } from './redux'
import Splash from './pages/Splash'
import Quiz from './pages/Quiz'

function App() {
  const started = useSelector((state) => {
    return state.screen !== SCREENS.START
  })

  return (
    !started ? <Splash /> : <Quiz />
  )
}

export default App
