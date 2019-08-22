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
import MatchList from './components/match_list/MatchList'
import Loading from './components/Loading/Loading'
import LiveMatch from './components/live_match/LiveMatch';

class App extends React.Component {
  state = {
    currentUser: {},
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
    .then(matches => this.setState({matches: matches.data}))
    API.getAllSports()
    .then(sports => this.setState({sports: sports.data}))
    API.createSubscription(this.updateScoreActionCable)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUser.id !== this.state.currentUser.id) {
      this.getMatches(this.state.currentUser.id)
      this.getFollowing(this.state.currentUser.id)
      this.getFollowers(this.state.currentUser.id)
    }
  }

  login = (user, history) => {
    API.loginUser(user)
      .then(currentUser => this.checkLogin(currentUser, history))
  }

  checkLogin = (currentUser, history) => {
    if (currentUser.id) {
      this.setState({currentUser}, () => history.push('/home'))
    } else {
      alert(currentUser.message)
    }
  }

  checkSignup = (currentUser, history) => {
    if (currentUser.id) {
      this.setState({currentUser}, () => this.setState({users: [...this.state.users, currentUser]}, () => history.push('/home')))
    } else {
      alert(currentUser.message)
    }
  }

  signup = (user, history) => {
    API.createUser(user)
      .then(currentUser => this.checkSignup(currentUser, history))
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

  getFollowers = (id) => {
    API.getUserFollowers(id)
    .then(followers => this.setState({followers}))
  }

  follow = (user1, user2) => {
    const newArray = this.state.following.filter(user => user.id !== user2.id)
    API.createFollow(user1, user2)
    .then(data => alert(data.message))
    .then(() => this.setState({following: [...newArray, user2]}))
  }

  createMatch = (match, history) => {
    const opponent = this.state.users.find(user => user.username === match.opponent_username)
    match.opponent_id = opponent ? opponent.id : null
    match.sport_id = parseInt(this.state.sports.find(sport => sport.attributes.name === match.sport).id)
    API.createMatch(match, this.state.currentUser.id)
    .then(userLiveMatch => {
      history.push(`/matches/live/${userLiveMatch.data.id}`)
    })
  } 

  updateScoreActionCable = (data) => {
    if (data.data.type === 'user') {
      this.setState({users: [...this.state.users, data.data.attributes]})
    } else {
    const newArray = this.state.matches.filter(m => m.id !== data.data.id)
    this.setState({matches: [...newArray, data.data]})
    }
  }

  updateScore = (user_score, opponent_score, match) => {
    const updatedMatch = {...match, user_score: user_score, opponent_score: opponent_score}
    API.updateMatch(updatedMatch, updatedMatch.id)
  }

  finishMatch = (match, id) => {
    const updatedMatch = {...match, live: false}
    API.updateMatch(updatedMatch, id)
    .then(userLiveMatch => this.setState({userLiveMatch}))
  }

  matchOpponent = (match) => match.opponent_id ? this.state.users.filter(user => user.id === match.attributes.opponent_id) : match.attributes.opponent_name
  matchUser = (match) => this.state.users.filter(user => user.id === match.attributes.user.id)

  render() {

    const LazyComponent = (condition, component) => condition ? component : <Loading />
    const currentUser = this.state.currentUser
    const userMatches = this.state.matches ? this.state.matches.filter(match => match.attributes.user.id === currentUser.id) : null
    const userLiveMatch = this.state.userLiveMatch
    const following = this.state.following
    const followers = this.state.followers
    const allLiveMatches = this.state.matches ? this.state.matches.filter(match => match.attributes.live === true) : null
    const liveMatches = allLiveMatches.sort((a, b) => b.id - a.id)
    const allUsers = this.state.users


  return (

    <div>
      <BrowserRouter>
        <NavBar {...this.props}/>
        <Route exact path='/' render={() => <Main />} />
        <Route exact path='/signup' render={props => <Signup {...props} signupUser={this.signup} />} />
        <Route exact path='/login' render={props => <Login {...props} loginUser={this.login} />} />
        <Route exact path='/home' render={props => LazyComponent(currentUser, <Home {...props} currentUser={currentUser} />)} />
        <Route exact path='/matches' render={props => <Match {...props} currentUser={currentUser} createMatch={this.createMatch}/>} />
        <Route exact path='/social' render={props => <Social {...props} following={following} followers={followers} unfollow={this.unfollow} follow={this.follow} currentUser={currentUser} />} />
        <Route exact path='/matches/new' render={props => <NewMatch {...props} match={userLiveMatch} createMatch={this.createMatch} sports={this.state.sports}/> } />        
        <Route exact path='/matches/all' render={props => LazyComponent((userMatches && allUsers), <MatchList {...props} matches={userMatches} users={allUsers}/>)} />
        <Route exact path='/matches/live' render={props => LazyComponent((liveMatches && allUsers), <MatchList {...props} matches={liveMatches} users={allUsers}/> )} />
        <Route exact path='/matches/live/:id' render={props => <LiveMatch {...props} follow={this.follow} updateScore={this.updateScore} sports={this.state.sports} setMatch={this.updateUserLiveMatch} users={this.state.users} matches={this.state.matches} userLiveMatch={userLiveMatch} currentUser={currentUser} finishMatch={this.finishMatch}/> } />
      </BrowserRouter>
    </div>
  )
  }
}

export default App
