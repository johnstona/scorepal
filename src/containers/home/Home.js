import React from 'react'
import Profile from '../profile/Profile'
import { Divider, Header } from 'semantic-ui-react'
import HomeButtons from '../../components/home_buttons/HomeButtons'
import Global from '../../Global'
import API from '../../adapters/API'
import { useState } from 'react'

const Home = ({ currentUser }) => {

  console.log(Global.state)

  return <div>
    <Header as='h3' inverted color='green' textAlign='center'>
      HOME
    </Header>
    <Profile currentUser={currentUser} />
    <Divider hidden />
    <HomeButtons />
  </div>
}

export default Home
