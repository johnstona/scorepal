import React, { useState } from 'react'
import './App.css'
import Main from './containers/main/Main'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import Signup from './containers/signup/Signup'
import Login from './containers/login/Login'
import API from './adapters/API'
import Home from './containers/home/Home'

function App () {
  const [currentUser, newUser] = useState({})

  const login = (user, history) => {
    API.loginUser(user)
      .then(newUser)
      .then(history.push('/home'))
  }

  const signup = (user, history) => {
    API.createUser(user)
      .then(newUser)
      .then(history.push('/home'))
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path='/' render={() => <Main user={currentUser} />} />
        <Route exact path='/signup' render={props => <Signup {...props} signupUser={signup} />} />
        <Route exact path='/login' render={props => <Login {...props} loginUser={login} />} />
        <Route exact path='/home' render={props => <Home {...props} currentUser={currentUser || ''} />} />
      </BrowserRouter>
    </div>
  )
}

export default App
