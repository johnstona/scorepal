import React from 'react'
import { Button, Grid } from 'semantic-ui-react'

const ScoreButtons = ({ updateScore }) => {
  return <>
    <Grid columns='2' divided textAlign='center'>
      <Grid.Column>
      <Button size='huge' color='blue' onClick={() => updateScore(1, 0)}>Player 1</Button>
      </Grid.Column>
      <Grid.Column>
      <Button size='huge' color='blue' onClick={() => updateScore(0, 1)}>Player 2</Button>
      </Grid.Column>
    </Grid>
          </>
}

export default ScoreButtons
