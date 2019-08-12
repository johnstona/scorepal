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
    matches: [],
    userMatches: [],
    users: [],
    userLiveMatch: {}
}

  componentDidMount() {
    API.getAllUsers()
    .then(users => this.setState({users}))
    API.getAllMatches()
    .then(matches => this.setState({matches}))
    API.createSubscription(this.updateScoreActionCable)
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

  unfollow = (id) => {
    const following = this.state.following.filter(user => user.id !== id)
    API.unfollow(id, this.state.currentUser.id)
    .then(this.setState({following}))
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
    const opponent = this.state.users.find(user => user.username === match.opponent_username)
    match.opponent_id = opponent ? opponent.id : null
    API.createMatch(match, this.state.currentUser.id)
    .then(userLiveMatch => {
      this.setState({matches: [...this.state.matches, userLiveMatch], userLiveMatch: userLiveMatch}, () => {history.push(`/matches/live/${this.state.userLiveMatch.id}`)})
    })
  }

  //this will currently change all the subscribers 

  updateScoreActionCable = (data) => {
    const newArray = this.state.matches.filter(match => match.id !== data.id)
    const newUserLiveMatch = (data.id === this.state.userLiveMatch.id) ? data : this.state.userLiveMatch
    this.setState({userLiveMatch: newUserLiveMatch, matches: [...newArray, data]})
  }

  updateUserLiveMatch = (userLiveMatch) => {
    this.setState({userLiveMatch})
  }

  updateScore = (user_score, opponent_score, match) => {
    const updatedMatch = {...match, user_score: user_score, opponent_score: opponent_score}
    API.updateMatch(updatedMatch)
    .then(userLiveMatch => this.setState({userLiveMatch}))
  }

  matchOpponent = (match) => match.opponent_id ? this.state.users.filter(user => user.id === match.opponent_id) : match.opponent_name
  matchUser = (match) => this.state.users.filter(user => user.id === match.user_id)

  render() {

    const LazyComponent = (condition, component) => condition ? component : <Loading />
    const currentUser = this.state.currentUser
    const matchOpponents = this.state.userMatches.map(match => this.matchOpponent(match))
    const matchUsers = this.state.userMatches.map(match => this.matchUser(match))
    const userMatches = this.state.userMatches.sort((a, b) => b.id - a.id)
    const userLiveMatch = this.state.userLiveMatch
    const following = this.state.following

  return (

    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path='/' render={() => <Main />} />
        <Route exact path='/signup' render={props => <Signup {...props} signupUser={this.signup} />} />
        <Route exact path='/login' render={props => <Login {...props} loginUser={this.login} />} />
        <Route exact path='/home' render={props => LazyComponent(currentUser, <Home {...props} currentUser={currentUser} />)} />
        <Route exact path='/matches' render={props => <Match {...props} currentUser={currentUser} createMatch={this.createMatch}/>} />
        <Route exact path='/social' render={props => <Social {...props} following={following} unfollow={this.unfollow} currentUser={currentUser} />} />
        <Route exact path='/matches/new' render={props => <NewMatch {...props} match={userLiveMatch} createMatch={this.createMatch}/> } />        
        <Route exact path='/matches/all' render={props => LazyComponent(userMatches, <MatchHistory {...props} matches={userMatches} matchUsers={matchUsers} matchOpponents={matchOpponents}/>)} />
        <Route exact path='/matches/live/:id' render={props => <LiveMatch {...props} updateScore={this.updateScore} setMatch={this.updateUserLiveMatch} users={this.state.users} matches={this.state.matches} userLiveMatch={userLiveMatch} currentUser={currentUser} /> } />
      </BrowserRouter>
    </div>
  )
  }
}

export default App
