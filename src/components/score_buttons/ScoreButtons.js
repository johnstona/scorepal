import React from 'react'
import { Button, Grid, Container, Divider } from 'semantic-ui-react'
import './ScoreButtons.css'

const ScoreButtons = ({ updateScore, finish, match, sport, newMatchEvent, player1, player2 }) => {
  const scoreEvents = sport.attributes.score_events
  const matchEvents = sport.attributes.match_events
  const player1Name = player1.name
  const player2Name = player2.name ? player2.name : player2

  return <>
    <Grid columns='2' divided textAlign='center'>
      <Grid.Column>
        <Button.Group vertical>
          {scoreEvents.map(scoreEvent =>
          <Button className='Button-bordered' size='huge' color='blue' onClick={() => updateScore(scoreEvent.point_value, 0)}>{scoreEvent.name}</Button>
        )}
        </Button.Group>
        <Button.Group vertical>
          {matchEvents.map(matchEvent =>
          <Button className='Button-bordered' size='huge' color='green' onClick={() => newMatchEvent(matchEvent, player1Name)}>{matchEvent.name}</Button>
        )}
        </Button.Group>
      </Grid.Column>
      <Grid.Column>
        <Button.Group vertical>
          {scoreEvents.map(scoreEvent =>
          <Button circular size='huge' color='blue' onClick={() => updateScore(0, scoreEvent.point_value)}>{scoreEvent.name}</Button>
        )}
        </Button.Group>
        <Button.Group vertical>
          {matchEvents.map(matchEvent =>
          <Button className='Button-bordered' size='huge' color='green' onClick={() => newMatchEvent(matchEvent, player2Name)}>{matchEvent.name}</Button>
        )}
        </Button.Group>
      </Grid.Column>
    </Grid>
    <Divider hidden />
    <Container textAlign='center'>
      <Button size='massive' color='red' onClick={() => finish(match)}>Complete Match</Button>
    </Container>
          </>
}

export default ScoreButtons
