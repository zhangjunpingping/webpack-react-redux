import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './modules/Main'
import { hot } from 'react-hot-loader/root'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </Router>
)
export default hot(App)
