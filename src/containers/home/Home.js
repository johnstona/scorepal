import React from 'react'
import Profile from '../profile/Profile'

const Home = ({ currentUser }) => {
  return <div>
    <Profile currentUser={currentUser}/>
  </div>
}

export default Home
