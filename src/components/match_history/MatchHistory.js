import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const MatchHistory = ({ matches, matchUsers, matchOpponents }) => {
  const userScores = matches.map(match => match.user_score)
  const userNames = matchUsers.map(user => user[0].name.split(' ')[1])
  const oppScores = matches.map(match => match.opponent_score)
  const oppNames = matchOpponents.map(opp => opp[0].name ? opp[0].name.split(' ')[1] : opp)
  const userNamesAndScores = userNames.map((n, i) => `${n}  ${userScores[i]}`)
  const oppScoresAndNames = oppScores.map((score, i) => `${score} ${oppNames[i]}`)

  return <Grid columns={2} divided>
    <Grid.Column>
      {userNamesAndScores.map(name => <Segment>{name}</Segment>)}
    </Grid.Column>
    <Grid.Column>
      {oppScoresAndNames.map(name => <Segment>{name}</Segment>)}
    </Grid.Column>
  </Grid>
}

export default MatchHistory
