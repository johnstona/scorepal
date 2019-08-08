import React from 'react'
import './App.css'
import Main from './containers/main/Main'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import Signup from './containers/signup/Signup'
import Login from './containers/login/Login'
import API from './adapters/API'
import Home from './containers/home/Home'
import Match from './containers/match/Match'
import Social from './containers/social/Social'
import NewMatch from './components/new_match/NewMatch'
import MatchHistory from './components/match_history/MatchHistory'

class App extends React.Component {
  state = {
    currentUser: {id: 2,
    username: "36Arsenal",
    name: "Mohammed Salah",
    password: "password",
    avatar: 3},
    followers: [],
    following: [],
    liveMatches: [],
    userMatches: [],
    users: []
}

  componentDidMount() {
    API.getAllUsers()
    .then(users => this.setState({users}))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUser.id !== this.state.currentUser.id) {
      this.getMatches(this.state.currentUser.id)
      this.getFollowing(this.state.currentUser.id)
    }
  }

  login = (user, history) => {
    API.loginUser(user)
      .then(currentUser => this.setState({currentUser}))
      .then(history.push('/home'))
  }

  signup = (user, history) => {
    API.createUser(user)
      .then(currentUser => this.setState({currentUser}))
      .then(history.push('/home'))
  }

  getMatches = (id) => {
    API.getUserMatches(id)
    .then(userMatches => this.setState({ userMatches }))
  }

  getFollowing = (id) => {
    API.getUserFollowing(id)
    .then(following => this.setState({following}))
  }

  render() {

  return (

    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path='/' render={() => <Main user={this.state.currentUser} />} />
        <Route exact path='/signup' render={props => <Signup {...props} signupUser={this.signup} />} />
        <Route exact path='/login' render={props => <Login {...props} loginUser={this.login} />} />
        <Route exact path='/home' render={props => <Home {...props} currentUser={this.state.currentUser || ''} />} />
        <Route exact path='/matches' render={props => <Match {...props} currentUser={this.state.currentUser} />} />
        <Route exact path='/social' render={props => <Social {...props} />} />
        <Route exact path='/matches/new' render={props => <NewMatch {...props} />} />
        <Route exact path='/matches/all' render={props => <MatchHistory {...props} matches={this.state.userMatches}/>} />
      </BrowserRouter>
    </div>
  )
  }
}

export default App
