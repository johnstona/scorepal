import React from 'react'
import Profile from '../profile/Profile'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeButtons from '../../components/home_buttons/HomeButtons'
import Match from '../match/Match'
import Social from '../social/Social'
import API from '../../adapters/API'

class Home extends React.Component {
  state = {
      currentUser: {},
      followers: [],
      following: [],
      liveMatches: [],
      userMatches: []
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.currentUser === this.state.currentUser) return
    API.getUserMatches(this.props.currentUser.id)
      .then(console.log)
  }

  render () {
    const { currentUser } = this.props

    return <div>
      <Profile currentUser={currentUser} />
      <BrowserRouter>
        <Route exact path='/matches' render={props => <Match {...props} />} />
        <Route exact path='/social' render={props => <Social {...props} />} />
      </BrowserRouter>
      <HomeButtons />
    </div>
  }
}

export default Home
