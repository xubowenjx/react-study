import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Hello from '../components/hello'
import World from '../components/world'
import NoMatch from '../components/nomatch'
import '../index.css'
 

const RouterList = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Hello} />
      <Route path="/two" component={World} />
      <Route component={NoMatch} />
       
    </Switch>
  </Router>
)
export default RouterList
