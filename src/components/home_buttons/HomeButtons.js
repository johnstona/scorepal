import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './HomeButtons.css'

const button = styled.button`
  border: none;
  padding: 20px 34px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  color: white;
    `;

const MatchButton = styled(button)`
  background-color: rgb(75, 174, 204);
`;

const SocialButton = styled(button)`
  background-color: #9882b8
  `;

const HomeButtons = () => {
  return <div className='buttons'>
    <Button.Group vertical>
      <Link to='/matches'>
        <MatchButton>Matches</MatchButton>
      </Link>
      <Link to='/social'>
        <SocialButton>Social</SocialButton>
      </Link>
    </Button.Group>
  </div>
}

export default HomeButtons
