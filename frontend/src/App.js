import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import Layout from './hocs/Layout'

import Home from './containers/home/Home'
import Register from './containers/register/Register'
import Dashboard from './containers/home/Home'
import Login from './containers/login/Login'

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/dashboard' component={Dashboard}/>
      </Layout>
    </Router>
  </Provider>
  
)

export default App