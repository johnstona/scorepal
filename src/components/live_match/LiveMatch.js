import React, { useState } from 'react'

//NB match in this component is the 'match' from props

const LiveMatch = ({userLiveMatch, match, matches}) => {

  const [ userMatch, toggleUserMatch ] = useState(userLiveMatch.id === parseInt(match.params.id))


return <div>{userMatch ? 'Your Live match!' : 'Not Your Match'}</div>

}

export default LiveMatch