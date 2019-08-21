import React from 'react'
import { Button, Container, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

const NewMatchButton = styled(button)`
  background-color: rgb(75, 174, 204);
`;

const LiveMatchesButton = styled(button)`
background-color: #27ab6c;
`;

const MatchHistoryButton = styled(button)`
  background-color: #9882b8
  `;

const MatchButtons = () => {
  return <Container textAlign='center'>
    <Button.Group vertical>
      <Link to='/matches/new'>
        <NewMatchButton>New Match!</NewMatchButton>
      </Link>
      <Link to='/matches/live'>
        <LiveMatchesButton>Live Matches!</LiveMatchesButton>
      </Link>
      <Link to='/matches/all'>
        <MatchHistoryButton>Match History</MatchHistoryButton>
      </Link>
    </Button.Group>
  </Container>
}

export default MatchButtons
