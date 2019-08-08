import React from 'react'
import MatchButtons from '../../components/match_buttons/MatchButtons'
import { Divider, Header } from 'semantic-ui-react'
import Profile from '../profile/Profile'

const Match = ({ currentUser }) => {
  return <div>
    <Header as='h3' inverted color='green' textAlign='center'>
      MATCH HOME
    </Header>
    <Profile currentUser={currentUser} />
    <Divider hidden />
    <MatchButtons />
  </div>
}

export default Match
