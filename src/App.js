import React from 'react'
//screens
import Cards from './screens/Cards'
//css
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './screens/Home'
import MenuSub from './components/MenuSub'

function App() {
  return (
    <Router>
      <div className='App'>
        <MenuSub />
        <Switch>
          <Route path='/' exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
