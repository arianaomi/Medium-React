import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//screens
import Home from './screens/Home'
import PostById from './screens/PostById'
import PostPopular from './screens/PostPopular'
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
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/popular' exact>
            <PostPopular />
          </Route>
          <Route path='/:id' exact>
            <PostById />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
