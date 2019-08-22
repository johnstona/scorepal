import React from 'react'
import { Grid, Segment, Label, Header, Icon } from 'semantic-ui-react'
import './MatchScore.css'

const MatchScore = ({ match, player1, player2, addFriend }) => {
  return <>
    <Header textAlign='center'>{match.sport.name.toUpperCase()}</Header>
    <Grid>
      <Grid.Row centered columns={2}>
        <Grid.Column>
          <Segment textAlign='center'>
            <div className='playerName'>
              {player1.name.split(' ')[0].toUpperCase()}
              <Icon className='user plus icon' onClick={() => addFriend(player1)} />
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign='center'>
            <div className='playerName'>
              {player2.name ? player2.name.split(' ')[0].toUpperCase() : player2.toUpperCase()}
              {player2.name && <Icon className='user plus icon' onClick={() => addFriend(player2)} />}
            </div>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={2}>
        <Grid.Column textAlign='center'>
          <Label circular color='green' size='massive'>
            {match.user_score}
          </Label>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Label circular color='green' size='massive'>
            {match.opponent_score}
          </Label>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
}

export default MatchScore
