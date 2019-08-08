import React from 'react'
import { Image } from 'semantic-ui-react'
import { importAll } from '../../functions/CustomFunctions'

const Profile = ({ currentUser }) => {
  return <Image src={images[`${currentUser.avatar}.png`]} />
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/))

export default Profile
