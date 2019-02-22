import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg'

/**
 * Import pages
 */

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateMessage from './pages/PrivateMessage'
import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion'
import Chat from './pages/Chat'
import ChatPrivate from './pages/ChatPrivate'

import AddFriend from './pages/AddFriend'

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
            <Route exact path='/register' component={Register}/>
            <Route exact path='/chat/private/:username' component={ChatPrivate}/>
            <Route exact path='/inscription' component={Inscription}/>
            <Route exact path='/connexion' component={Connexion}/>
            <Route exact path='/chat' component={Chat}/>
            <Route exact path='/friend' component={AddFriend}/>
          </Switch>
      )} />
    </div>

    );
  }
}

export default App;
