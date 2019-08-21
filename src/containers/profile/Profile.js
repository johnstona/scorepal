import React from 'react'
import { Image, Container, Divider, Card } from 'semantic-ui-react'
import { importAll } from '../../functions/CustomFunctions'

const Profile = ({ currentUser }) => {
  return <Container textAlign='center'>
    <Card centered>
      <Image src={images[`${currentUser.avatar}.png`]} size='small' circular centered />
      <Card.Content>
        <Card.Header>{currentUser.name}</Card.Header>
      </Card.Content>
    </Card>
    <Divider />
  </Container>
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/))

export default Profile
