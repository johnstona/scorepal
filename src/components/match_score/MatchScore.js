import React from 'react'

const MatchScore = ({ match, player1, player2 }) => {
  return <div> {player1.name} {match.user_score} : {match.opponent_score} {player2.name ? player2.name : player2}</div>
}

export default MatchScore
