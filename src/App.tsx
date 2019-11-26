import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './modules/Main'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { store } from './store'

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </Provider>
)
export default hot(App)
