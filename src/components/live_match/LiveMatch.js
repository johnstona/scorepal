import React, { useState, useEffect } from 'react'
import MatchScore from '../match_score/MatchScore'
import Loading from '../Loading/Loading'
import ScoreButtons from '../score_buttons/ScoreButtons'

// NB match in this component is the 'match' from props

const LiveMatch = ({ currentUser, updateScore, userLiveMatch, match, matches, users, setMatch }) => {
  const LazyComponent = (condition, component) => condition ? component : <Loading />

  const currentMatch = matches.find(m => m.id === parseInt(match.params.id))
  const userMatch = userLiveMatch ? userLiveMatch.user_id === currentUser.id : false
  const player1 = userLiveMatch ? users.find(user => user.id === userLiveMatch.user_id) : null
  const player2 = userLiveMatch ? (users.find(user => user.id === userLiveMatch.opponent_id) || userLiveMatch.opponent_name) : null
  const player1Score = userLiveMatch ? userLiveMatch.user_score : 0
  const player2Score = userLiveMatch ? userLiveMatch.opponent_score : 0

  const updateScoreLive = (score1, score2) => {
    const player1UpdatedScore = (player1Score + score1)
    const player2UpdatedScore = (player2Score + score2)
    updateScore(player1UpdatedScore, player2UpdatedScore, userLiveMatch)
  }

  useEffect(() => {
    setMatch(currentMatch)
  }, [currentMatch, setMatch])

  // Match Score component should be rendered for the match
  // MatchCompleted ? render - this match is no longer live
  // userMatch ? render matchcontrolbuttons : render live updates

  return <>
    <div>{userMatch ? <ScoreButtons updateScore={updateScoreLive} /> : 'Not Your Match'}</div>
    {LazyComponent(player2, <MatchScore match={userLiveMatch} player1={player1} player2={player2} />)}
      </>
}

export default LiveMatch
