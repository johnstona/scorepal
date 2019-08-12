import React from 'react'
import { Button } from 'semantic-ui-react'
import BackButton from '../../components/back_button/BackButton'

const Social = ({ following, unfollow, history, currentUser }) => {
  return <>
    {following.map(user => {
      return <>
      <div>{user.name}</div>
      <Button onClick={() => unfollow(user.id)}>Unfollow</Button>
      </>
    })}
    <BackButton history={history}/>
  </>
}

export default Social
