import React from 'react'
import { Button } from 'semantic-ui-react'
import Welcome from '../../components/welcome/Welcome'
import { Link } from 'react-router-dom'

const Main = () => {
  return <>
    <Welcome />
    <Button to='/login' as={Link} >Login</Button>
    <Button to='/signup' as={Link} >Signup</Button>
        </>
}

export default Main
