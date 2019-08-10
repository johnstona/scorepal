import React from 'react'
import { Button } from 'semantic-ui-react'

const Social = ({ following, unfollow }) => {
  return following.map(user => {
    return <>
      <div>{user.name}</div>
      <Button onClick={() => unfollow(user.id)}>Unfollow</Button>
            </>
  })
}

export default Social
