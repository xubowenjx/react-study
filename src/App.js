import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Hello from './components/hello'
import World from './components/world'
 

const RouterList = () => (
  <Router>
    <div>
      <Route exact path="/" component={Hello} />
      <Route path="/two" component={World} />
    </div>
  </Router>
)
export default RouterList
