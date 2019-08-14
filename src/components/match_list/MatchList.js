import React from 'react'
import { Grid, Segment, Divider, Container, Label, Button } from 'semantic-ui-react'
import BackButton from '../back_button/BackButton'

const MatchList = ({ matches, users, history }) => {

  return <>

    <Grid divided='vertically' textAlign='center'>
      {matches.map(match => {
        return <Grid>
          <Grid.Row centered columns={2}>
            <Grid.Column >
              <Segment textAlign='center'>{users.find(user => user.id === match.user_id).name}</Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment textAlign='center'>{match.opponent_id ? users.find(opp => opp.id === match.opponent_id).name : match.opponent_name}</Segment>

            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={3}>
            <Grid.Column textAlign='center'>
              <Label circular color='green' size='huge'>{match.user_score}</Label>
            </Grid.Column>
            <Grid.Column>
              <Button circular color='pink' size='huge' onClick={() => history.push(`/matches/live/${match.id}`)}>{match.live ? 'Watch!' : 'See result'}</Button>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Label circular color='green' size='huge'>{match.opponent_score}
              </Label>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      })}
    </Grid>

    {/* <Grid columns={2} divided>
      <Grid.Column>
        {userNamesAndScores.map(name => <Segment textAlign='left'>{name}</Segment>)}
      </Grid.Column>
      <Grid.Column>
        {oppScoresAndNames.map(name => <Segment textAlign='right'>{name}</Segment>)}
      </Grid.Column>
    </Grid> */}
    <Divider hidden />
    <Container textAlign='center'>
      <BackButton history={history} />
    </Container>
  </>
}

export default MatchList
