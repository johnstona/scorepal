import React, { useState, useEffect } from 'react'
import MatchScore from '../match_score/MatchScore'
import Loading from '../Loading/Loading'
import ScoreButtons from '../score_buttons/ScoreButtons'
import { Container, Divider, Header } from 'semantic-ui-react'
import API from '../../adapters/API'

// NB match in this component is the 'match' from props

const LiveMatch = ({ currentUser, updateScore, match, users, finishMatch, sports }) => {
  const [liveMatch, setCurrentMatch] = useState()

  const LazyComponent = (condition, component) => condition ? component : <Loading />

  const userLiveMatch = liveMatch ? liveMatch.data.attributes : null
  const userMatch = userLiveMatch && (userLiveMatch.user.id === currentUser.id)
  const player1 = userLiveMatch ? users.find(user => user.id === userLiveMatch.user.id) : null
  const player2 = userLiveMatch ? (users.find(user => user.id === userLiveMatch.opponent_id) || userLiveMatch.opponent_name) : null
  const player1Score = userLiveMatch ? userLiveMatch.user_score : 0
  const player2Score = userLiveMatch ? userLiveMatch.opponent_score : 0
  const sport = userLiveMatch ? (sports.find(sport => parseInt(sport.id) === userLiveMatch.sport.id)) : null

  const updateScoreLive = (score1, score2) => {
    const player1UpdatedScore = (player1Score + score1)
    const player2UpdatedScore = (player2Score + score2)
    updateScore(player1UpdatedScore, player2UpdatedScore, liveMatch.data)
  }

  const updateEvents = (data) => {
    setCurrentMatch(data)
  }

  useEffect(() => {
    API.getMatch(parseInt(match.params.id))
      .then(setCurrentMatch)
  }, [match.params.id])

  useEffect(() => {
    API.createLiveSubscription(updateEvents)
  }, [match.params.id])

  // Match Score component should be rendered for the match
  // MatchCompleted ? render - this match is no longer live
  // userMatch ? render matchcontrolbuttons : render live updates

  return <>
    <Container >
      {LazyComponent((userLiveMatch && player1 && player2), <MatchScore match={userLiveMatch} player1={player1} player2={player2} />)}
    </Container>
    <Divider />
    {(userLiveMatch) ? (userLiveMatch.live ? (
      <Container>
        {userMatch ? LazyComponent(sport, <ScoreButtons updateScore={updateScoreLive} finish={finishMatch} match={userLiveMatch} sport={sport} /> ) : 'Not Your Match'}
      </Container>
    ) : 'This match has finished') : <Loading />}
      </>
}

export default LiveMatch
