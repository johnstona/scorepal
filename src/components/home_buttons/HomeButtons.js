import React from 'react'
import { Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HomeButtons = () => {
  return <Container textAlign='center'>
    <Button.Group vertical>
      <Button to='/matches' as={Link} color='orange'>Matches</Button>
      <Button to='/social' as={Link} color='pink'>Social</Button>
    </Button.Group>
  </Container>
}

export default HomeButtons
