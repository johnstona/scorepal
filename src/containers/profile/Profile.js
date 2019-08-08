import React from 'react'
import { Image, Container, Divider, Card, Segment, Header } from 'semantic-ui-react'
import { importAll } from '../../functions/CustomFunctions'
import HomeButtons from '../../components/home_buttons/HomeButtons'

const Profile = ({ currentUser }) => {
  return <Container textAlign='center'>
      <Header as='h3' inverted color='green' textAlign='center'>
      HOME
      </Header>
    <Card centered>
      <Image src={images[`${currentUser.avatar}.png`]} size='small' circular centered />
      <Card.Content>
        <Card.Header>{currentUser.name}</Card.Header>
      </Card.Content>
    </Card>
    <Divider />
    <HomeButtons />
  </Container>
  
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/))

export default Profile
