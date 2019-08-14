import React from 'react'
import { Segment, Loader } from 'semantic-ui-react'

const Loading = () => {
  return <Segment>
    <Loader active size='massive'>Loading</Loader>
  </Segment>
}

export default Loading
