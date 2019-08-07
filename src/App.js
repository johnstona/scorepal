import React, { useState } from 'react'
import './App.css'
import Main from './containers/main/Main'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import Signup from './containers/signup/Signup'
import Login from './containers/login/Login'
import API from './adapters/API'

function App () {
  const [currentUser, newUser] = useState({})

  const login = (user) => {
    API.loginUser(user)
      .then(user => {
        if (user.id) {
          newUser(user)
        } else {
          console.log(user)
        }
      })
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path='/' render={() => <Main user={currentUser} />} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' render={props => <Login {...props} loginUser={login} />} />
      </BrowserRouter>
    </div>
  )
}

export default App
