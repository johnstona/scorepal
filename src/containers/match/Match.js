import React from 'react'
import MatchButtons from '../../components/match_buttons/MatchButtons'
import { Grid, Header } from 'semantic-ui-react'
import Profile from '../profile/Profile'
import './Match.css'

const Match = ({ currentUser, createMatch }) => {
  return <Grid textAlign='center'>
    <Header as='h3' textAlign='center'>
      MATCH HOME
    </Header>
    <Profile currentUser={currentUser} />
    <MatchButtons newMatch={createMatch} />
  </Grid>
}

export default Match
