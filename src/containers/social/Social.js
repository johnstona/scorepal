import React from 'react'
import { Button, Segment, Header, Grid, Divider, Container } from 'semantic-ui-react'
import BackButton from '../../components/back_button/BackButton'

const Social = ({ following, unfollow, follow, history, followers, currentUser }) => {
  const followerIds = followers.map(f => f.id)
  const followingIds = following.map(f => f.id)
  const alreadyFollowed = followingIds.filter(id => followerIds.includes(id))

  return <>
    <Header textAlign='center'>FOLLOWING</Header>
    <Grid textAlign='center'>
      {following.map(user => {
        return <>
          <Grid.Row centered columns={2}>
            <Grid.Column><Segment>{user.name}</Segment></Grid.Column>
            <Grid.Column>
              <Button color='red' size='huge' onClick={() => unfollow(user.id)}>Unfollow</Button>
            </Grid.Column>
          </Grid.Row>
      </>
      })}
      <Divider hidden />
    </Grid>
    <Header textAlign='center'>FOLLOWS YOU</Header>
    <Grid textAlign='center'>
        {followers.map(user => {
          return <>
          <Grid.Row centered columns={2}>
            <Grid.Column><Segment>{user.name}</Segment></Grid.Column>
            <Grid.Column>
              {!alreadyFollowed.includes(user.id) ?
              <Button color='red' size='huge' onClick={() => follow(currentUser, user)}>Follow Back</Button>
              : <Button color='grey' size='huge' disabled={true}>Already Followed</Button>
              }
            </Grid.Column>
          </Grid.Row>
      </>
        })}
        <Divider hidden />
      </Grid>
    <Container textAlign='center'>
        <BackButton textAlign='center' history={history} />
      </Container>
  </>
}

export default Social
