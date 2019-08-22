import React from 'react'
import { Button, Segment, Header, Grid, Divider, Container } from 'semantic-ui-react'
import BackButton from '../../components/back_button/BackButton'
import styled from 'styled-components'

const button = styled.button`
  border: none;
  padding: 20px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  color: white;
    `

const FollowButton = styled(button)`
  background-color: rgb(75, 174, 204);
`

const Social = ({ following, unfollow, follow, history, followers, currentUser }) => {
  const followerIds = followers.map(f => f.id)
  const followingIds = following.map(f => f.id)
  const alreadyFollowed = followingIds.filter(id => followerIds.includes(id))

  return <Container textAlign='center'>
    <Header textAlign='center'>FOLLOWING</Header>
    <Grid textAlign='center'>
      {following.map(user => {
        return <>
          <Grid.Row centered columns={2}>
            <Grid.Column><Segment>{user.name}</Segment></Grid.Column>
            <Grid.Column>
              <FollowButton onClick={() => unfollow(user.id)}>Unfollow</FollowButton>
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
              {!alreadyFollowed.includes(user.id)
                ? <FollowButton onClick={() => follow(currentUser, user)}>Follow Back</FollowButton>
                : <FollowButton disabled>Already Followed</FollowButton>
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
  </Container>
}

export default Social
