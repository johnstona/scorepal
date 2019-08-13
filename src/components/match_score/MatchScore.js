import React from 'react'
import { Grid, Segment, Label, Header, Divider } from 'semantic-ui-react'

const MatchScore = ({ match, player1, player2 }) => {
  return <>
    <Header textAlign='center'>{match.sport}</Header>
    <Divider hidden />
    <Grid columns='2' divided>
      <Grid.Column>
        <Segment textAlign='center'>
          {player1.name.toUpperCase()}
        </Segment>
        <Segment textAlign='center'> <Label circular color='green' size='massive'>
          {match.user_score}
        </Label>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment textAlign='center'>
          {player2.name ? player2.name.toUpperCase() : player2.toUpperCase()}
        </Segment>
        <Segment textAlign='center'>
          <Label circular color='green' size='massive'>
            {match.opponent_score}
          </Label>
        </Segment>
      </Grid.Column>
    </Grid>
  </>
}

export default MatchScore
