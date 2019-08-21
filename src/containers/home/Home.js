import React from 'react'
import Profile from '../profile/Profile'
import { Grid, Header } from 'semantic-ui-react'
import HomeButtons from '../../components/home_buttons/HomeButtons'

const Home = ({ currentUser }) => {

  return <Grid textAlign='center'>
    <Header as='h3' textAlign='center'>
      HOME
    </Header>
    <Profile currentUser={currentUser} />
    <HomeButtons />
  </Grid>
}

export default Home
