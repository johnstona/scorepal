import React from 'react'
import { Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MatchButtons = () => {
  return <Container textAlign='center'>
    <Button.Group vertical>
      <Button to='/matches/new' as={Link} color='orange'>New Match!</Button>
      <Button to='/matches/all' as={Link} color='pink'>Match History</Button>
    </Button.Group>
  </Container>
}

export default MatchButtons
