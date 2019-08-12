import React from 'react'
import { Button } from 'semantic-ui-react'

const BackButton = ({ history }) => {
  return <>
    <Button size='massive' color='green' onClick={() => history.goBack()}>Back</Button>
          </>
}

export default BackButton
