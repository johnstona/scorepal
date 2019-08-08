import React from 'react'
import Profile from '../profile/Profile'
import { BrowserRouter, Route } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import HomeButtons from '../../components/home_buttons/HomeButtons'
import Match from '../match/Match'
import Social from '../social/Social'
import NewMatch from '../../components/new_match/NewMatch'
import MatchHistory from '../../components/match_history/MatchHistory'
import API from '../../adapters/API'

class Home extends React.Component {
  state = {
      currentUser: {id: 2,
      username: "36Arsenal",
      name: "Mohammed Salah",
      password: "password",
      avatar: 3},
      followers: [],
      following: [],
      liveMatches: [],
      userMatches: []
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.currentUser === this.state.currentUser) return
    this.setState({currentUser: this.props.currentUser})
    API.getUserMatches(this.state.currentUser.id)
      .then(console.log)
  }

  render () {
    const { currentUser } = this.state

    return <div>
      <BrowserRouter>
        <Profile currentUser={currentUser} />
        <Divider hidden />
        <Route exact path='/matches' render={props => <Match {...props} />} />
        <Route exact path='/social' render={props => <Social {...props} />} />
        <Route exact path='/matches/new' render={props => <NewMatch {...props} />} />
        <Route exact path='/matches/all' render={props => <MatchHistory {...props} />} />
      </BrowserRouter>
    </div>
  }
}

export default Home
