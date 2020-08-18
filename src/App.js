import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//screens
import Home from './screens/Home'
//Components
import MenuSub from './components/MenuSub'
//css
import './App.css'

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
