import React from 'react'
import { Button, Grid, Container, Divider } from 'semantic-ui-react'

const ScoreButtons = ({ updateScore, finish, match }) => {
  return <>
    <Grid columns='2' divided textAlign='center'>
      <Grid.Column>
      <Button size='huge' color='blue' onClick={() => updateScore(1, 0)}>Player 1</Button>
      </Grid.Column>
      <Grid.Column>
      <Button size='huge' color='blue' onClick={() => updateScore(0, 1)}>Player 2</Button>
      </Grid.Column>
    </Grid>
    <Divider hidden />
    <Container textAlign='center'>
      <Button size='massive' color='red' onClick={() => finish(match)}>Complete Match</Button>
    </Container>
          </>
}

export default ScoreButtons
