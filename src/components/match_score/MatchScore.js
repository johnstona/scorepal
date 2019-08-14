import React from 'react'
import { Grid, Segment, Label, Header, Divider } from 'semantic-ui-react'

const MatchScore = ({ match, player1, player2 }) => {
  return <>
    <Header textAlign='center'>{match.sport}</Header>
    <Divider hidden />
    <Grid>
      <Grid.Row centered columns={2}>
        <Grid.Column>
          <Segment textAlign='center'>
            {player1.name.split(' ')[0].toUpperCase()}
          </Segment>
        </Grid.Column>
        <Grid.Column>
        <Segment textAlign='center'>
            {player2.name ? player2.name.split(' ')[0].toUpperCase() : player2.toUpperCase()}
          </Segment>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={2}>
        <Grid.Column>

          <Segment textAlign='center'>
            <Label circular color='green' size='massive'>
              {match.user_score}
            </Label>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign='center'>
            <Label circular color='green' size='massive'>
              {match.opponent_score}
            </Label>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
}

export default MatchScore
