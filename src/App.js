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
import Loading from './components/Loading/Loading'
import LiveMatch from './components/live_match/LiveMatch';

class App extends React.Component {
  state = {
    currentUser: {
      "id": 9,
      "username": "Benfica834",
      "name": "Paul Pogba",
      "password": "password",
      "avatar": "13"
    },
    followers: [],
    following: [],
    liveMatches: [],
    userMatches: [],
    users: [],
    userLiveMatch: {}
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

  createMatch = (match, history) => {
    API.createMatch(match, this.state.currentUser.id)
    .then(userLiveMatch => {
      this.setState({userLiveMatch})
      history.push(`/matches/live/${userLiveMatch.id}`)
    }
      )
  }

  matchOpponent = (match) => match.opponent_id ? this.state.users.filter(user => user.id === match.opponent_id) : match.opponent_name
  matchUser = (match) => this.state.users.filter(user => user.id === match.user_id)

  render() {

    const LazyComponent = (condition, component) => condition ? component : <Loading />
    const currentUser = this.state.currentUser
    const matchOpponents = this.state.userMatches.map(match => this.matchOpponent(match))
    const matchUsers = this.state.userMatches.map(match => this.matchUser(match))
    const userMatches = this.state.userMatches
    const userLiveMatch = this.state.userLiveMatch

  return (

    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path='/' render={() => <Main user={currentUser} />} />
        <Route exact path='/signup' render={props => <Signup {...props} signupUser={this.signup} />} />
        <Route exact path='/login' render={props => <Login {...props} loginUser={this.login} />} />
        <Route exact path='/home' render={props => LazyComponent(currentUser, <Home {...props} currentUser={currentUser} />)} />
        <Route exact path='/matches' render={props => <Match {...props} currentUser={currentUser} createMatch={this.createMatch}/>} />
        <Route exact path='/social' render={props => <Social {...props} />} />
        <Route exact path='/matches/new' render={props => <NewMatch {...props} match={userLiveMatch} createMatch={this.createMatch}/> } />        
        <Route exact path='/matches/all' render={props => LazyComponent(userMatches, <MatchHistory {...props} matches={this.state.userMatches} matchUsers={matchUsers} matchOpponents={matchOpponents}/>)} />
        <Route exact path='/matches/live/:id' render={props => <LiveMatch {...props} matches={this.state.liveMatches} userLiveMatch={userLiveMatch} currentUser={currentUser} /> } />
      </BrowserRouter>
    </div>
  )
  }
}

export default App
