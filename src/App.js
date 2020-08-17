import React from 'react'
//screens
import Cards from './screens/Cards'
//css
import './App.css'
import { Container } from 'react-bootstrap'
import Home from './screens/Home'

function App() {
  return (
    <Container>
      <div className='App'>
        <Cards />
        <Home />
      </div>
    </Container>
  )
}

export default App
