import React from 'react'
import { Button, Grid, Container, Divider } from 'semantic-ui-react'

const ScoreButtons = ({ updateScore, finish, match, sport }) => {
  const scoreEvents = sport.attributes.score_events
  const matchEvents = sport.attributes.match_events
  return <>
    <Grid columns='2' divided textAlign='center'>
      <Grid.Column>
        {scoreEvents.map(scoreEvent =>
          <Button size='huge' color='blue' onClick={() => updateScore(scoreEvent.point_value, 0)}>{scoreEvent.name}</Button>
        )}
      </Grid.Column>
      <Grid.Column>
        {scoreEvents.map(scoreEvent =>
          <Button size='huge' color='blue' onClick={() => updateScore(0, scoreEvent.point_value)}>{scoreEvent.name}</Button>
        )}
      </Grid.Column>
    </Grid>
    <Divider hidden />
    <Container textAlign='center'>
      <Button size='massive' color='red' onClick={() => finish(match)}>Complete Match</Button>
    </Container>
          </>
}

export default ScoreButtons
