import React from 'react'
import Profile from '../profile/Profile'

const Home = ({ currentUser }) => {
  return <div>{currentUser ? currentUser.name : 'You are not logged in'}
    <Profile currentUser={currentUser}/>
  </div>
}

export default Home
