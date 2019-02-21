import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg'

/**
 * Import pages
 */

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import './App.css'

class App extends Component {
  
  render() {

    return (
      <div className="App">
      
      <Route render={({location}) => (
          <Switch location={location}>
            <Route exact path='/' component={Home}/>
            <Route exact path='/user/about' component={About}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
      )} />
    </div>

    );
  }
}

export default App;
