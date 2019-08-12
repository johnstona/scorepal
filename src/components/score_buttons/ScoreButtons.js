import React from 'react'
import { Button } from 'semantic-ui-react'

const ScoreButtons = ({ updateScore }) => {
  return <>
    <Button onClick={() => updateScore(1, 0)}>Player 1</Button>
    <Button onClick={() => updateScore(0, 1)}>Player 2</Button>
          </>
}

export default ScoreButtons
