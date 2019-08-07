import React from 'react'
import { Button } from 'semantic-ui-react'
import './Button.css'

const AppButton = ({ text, callback }) => {
  return <Button onClick={callback}>{text}</Button>
}

export default AppButton
