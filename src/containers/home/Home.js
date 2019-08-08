import React from 'react'

const Home = ({ currentUser }) => {
  return <div>{currentUser ? currentUser.name : 'You are not logged in'}</div>
}

export default Home