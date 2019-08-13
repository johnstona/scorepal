import React from 'react'
import { Button, Container, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MatchButtons = () => {
  return <Container textAlign='center'>
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Button.Group vertical>
      <Button size='massive' to='/matches/new' as={Link} color='orange'>New Match!</Button>
      <Button size='massive' to='/matches/all' as={Link} color='pink'>Match History</Button>
      <Button size='massive' to='/matches/live' as={Link} color='pink'>Live Matches!</Button>
    </Button.Group>
  </Container>
}

export default MatchButtons
