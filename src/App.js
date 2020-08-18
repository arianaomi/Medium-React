import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//screens
import Home from './screens/Home'
import PostById from './screens/PostById'
import PostPopular from './screens/PostPopular'
import Form from './screens/Form'

//css
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/popular' exact>
            <PostPopular />
          </Route>
          <Route path='/form' exact>
            <Form />
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
