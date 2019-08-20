import React from 'react'
import { Button, Container, Divider } from 'semantic-ui-react'
import Welcome from '../../components/welcome/Welcome'
import { Link } from 'react-router-dom'
import styles from '../../Styles'

const Main = () => {
  return <>
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Welcome />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Container textAlign='center'>
      <Button.Group vertical>
        <Link to='/login'>
          <button style={styles.button}>Login</button>
        {/* <Button size='massive' color='green' to='/login' as={Link} >Login</Link> */}
        </Link>
        <Button size='massive' color='blue' to='/signup' as={Link} >Signup</Button>
      </Button.Group>
    </Container>
        </>
}

export default Main
