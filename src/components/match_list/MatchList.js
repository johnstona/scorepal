import React, { useState } from 'react'
import { Grid, Segment, Divider, Container, Label, Button, Dropdown } from 'semantic-ui-react'
import BackButton from '../back_button/BackButton'

const MatchList = ({ matches, users, history }) => {
  const [selection, changeSelection] = useState('')

  const sports = matches && [...new Set(matches.map(match => match.attributes.sport.name))]
  const sportOptions = sports && sports.map(sport => {
    return { key: sport, value: sport, text: sport }
  })

  const handleChange = (e, { value }) => {
    changeSelection(value)
  }

  return <>
    <Dropdown onChange={handleChange}
      placeholder='Select Sport'
      fluid
      selection
      options={sportOptions} />

    <Grid divided='vertically' textAlign='center'>
      {matches.map(match => {
        if (match.attributes.sport.name !== selection) return
        return <Grid>
          <Grid.Row centered columns={2}>
            <Grid.Column >
              <Segment textAlign='center'>{users.find(user => user.id === match.attributes.user.id).name}</Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment textAlign='center'>{match.attributes.opponent_id ? users.find(opp => opp.id === match.attributes.opponent_id).name : match.attributes.opponent_name}</Segment>

            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={3}>
            <Grid.Column textAlign='center'>
              <Label circular color='green' size='huge'>{match.attributes.user_score}</Label>
            </Grid.Column>
            <Grid.Column>
              <Button circular color='pink' size='huge' onClick={() => history.push(`/matches/live/${match.id}`)}>{match.attributes.live ? 'Watch!' : 'See result'}</Button>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Label circular color='green' size='huge'>{match.attributes.opponent_score}
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      })}
    </Grid>
    <Divider hidden />
    <Container textAlign='center'>
      <BackButton history={history} />
    </Container>
  </>
}

export default MatchList
