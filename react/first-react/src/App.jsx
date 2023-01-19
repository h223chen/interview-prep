import { useState } from 'react'

import BasicInfo from './components/BasicInfo'
import Social from './components/Social'
import ContentSection from './components/ContentSection'

import './App.css'
import logo from './assets/react.svg'

function App() {
  return (
    <div className="App">
      <img src={logo} alt='logo' width='100%' />
      <BasicInfo />
      <Social />
      <ContentSection 
        title='About'
        body='lorem ipsum something something something something'
      />
      <ContentSection 
        title='Interests'
        body='lorem ipsum something something something else'
      />
    </div>
  )
}

export default App
