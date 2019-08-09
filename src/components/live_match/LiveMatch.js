import React, { useState } from 'react'

//NB match in this component is the 'match' from props

const LiveMatch = ({userLiveMatch, match, matches}) => {

  const userMatch = (userLiveMatch.id === parseInt(match.params.id))

// Match Score component should be rendered for the match
// MatchCompleted ? render - this match is no longer live
// userMatch ? render matchcontrolbuttons : render live updates

return <div>{userMatch ? 'Your Live match!' : 'Not Your Match'}</div>

}

export default LiveMatch