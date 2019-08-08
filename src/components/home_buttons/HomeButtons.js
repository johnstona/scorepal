import React from 'react'
import { Button, Container, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HomeButtons = () => {
  return <Container textAlign='center'>
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Button.Group vertical>
      <Button size='massive' to='/matches' as={Link} color='orange'>Matches</Button>
      <Button size='massive' to='/social' as={Link} color='pink'>Social</Button>
    </Button.Group>
  </Container>
}

export default HomeButtons
