import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ButtonsContainer = () => {
  return <>
    <Button to='/matches' as={Link} >Match Home</Button>
    <Button to='/social' as={Link} >Social</Button>
          </>
}

export default ButtonsContainer
