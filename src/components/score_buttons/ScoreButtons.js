import React, { useState } from 'react'
import { Button, Grid, Container, Divider, Modal, Input } from 'semantic-ui-react'
import './ScoreButtons.css'
import styled from 'styled-components'

const button = styled.button`
  border: none;
  padding: 10px 10px;
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

const ScoreEventButton = styled(button)`
  background-color: rgb(75, 174, 204);
`;

const MatchEventButton = styled(button)`
  background-color: #9882b8
  `;

const ConfirmPlayerButton = styled(button)`
background-color: #9882b8;
display: inline;
width: 180px;
`;

const CompleteMatchButton = styled(button)`
background-color: #9882b8;`

const ScoreButtons = ({ updateScore, finish, match, sport, newMatchEvent, newScoreEvent, player1, player2 }) => {
  const [player1ScoreModalOpen, toggleplayer1ScoreModalOpen] = useState(false)
  const [player2ScoreModalOpen, toggleplayer2ScoreModalOpen] = useState(false)
  const [player1ScoreModalInput, setplayer1ScoreModalInput] = useState('')
  const [player1ScoreModalEvent, setplayer1ScoreModalEvent] = useState('')
  const [player2ScoreModalInput, setplayer2ScoreModalInput] = useState('')
  const [player2ScoreModalEvent, setplayer2ScoreModalEvent] = useState('')
  const [player1MatchModalOpen, toggleplayer1MatchModalOpen] = useState(false)
  const [player2MatchModalOpen, toggleplayer2MatchModalOpen] = useState(false)
  const [player1MatchModalInput, setplayer1MatchModalInput] = useState('')
  const [player1MatchModalEvent, setplayer1MatchModalEvent] = useState('')
  const [player2MatchModalInput, setplayer2MatchModalInput] = useState('')
  const [player2MatchModalEvent, setplayer2MatchModalEvent] = useState('')

  const player1ScoreModalClose = () => {
    toggleplayer1ScoreModalOpen(false)
    setplayer1ScoreModalInput('')
  }
  const player1ScoreModalChange = e => {
    setplayer1ScoreModalInput(e.target.value)
  }

  const player2ScoreModalClose = () => {
    toggleplayer2ScoreModalOpen(false)
    setplayer2ScoreModalInput('')
  }

  const player2ScoreModalChange = e => {
    setplayer2ScoreModalInput(e.target.value)
  }

  const player1MatchModalClose = () => {
    toggleplayer1MatchModalOpen(false)
    setplayer1MatchModalInput('')
  }
  const player1MatchModalChange = e => {
    setplayer1MatchModalInput(e.target.value)
  }

  const player2MatchModalClose = () => {
    toggleplayer2MatchModalOpen(false)
    setplayer2MatchModalInput('')
  }
  const player2MatchModalChange = e => {
    setplayer2MatchModalInput(e.target.value)
  }

  const scoreEvents = sport.attributes.score_events
  const matchEvents = sport.attributes.match_events
  const player1Name = player1.name
  const player2Name = player2.name ? player2.name : player2

  const handlePlayer1ScoreClick = (scoreEvent) => {
    updateScore(scoreEvent.point_value, 0)
    setplayer1ScoreModalEvent(scoreEvent)
    toggleplayer1ScoreModalOpen(true)
  }

  const handlePlayer2ScoreClick = (scoreEvent) => {
    updateScore(0, scoreEvent.point_value)
    setplayer2ScoreModalEvent(scoreEvent)
    toggleplayer2ScoreModalOpen(true)
  }

  const handlePlayer1MatchClick = (matchEvent) => {
    setplayer1MatchModalEvent(matchEvent)
    toggleplayer1MatchModalOpen(true)
  }

  const handlePlayer2MatchClick = (matchEvent) => {
    setplayer2MatchModalEvent(matchEvent)
    toggleplayer2MatchModalOpen(true)
  }

  const createScoreEvent = (event, player, input) => {
    newScoreEvent(event, player, input)
    player1ScoreModalClose()
    player2ScoreModalClose()
    setplayer2ScoreModalEvent('')
    setplayer1ScoreModalEvent('')
  }

  const createMatchEvent = (event, player, input) => {
    newMatchEvent(event, player, input)
    player1MatchModalClose()
    player2MatchModalClose()
    setplayer2MatchModalEvent('')
    setplayer1MatchModalEvent('')
  }

  return <>
    <Grid columns='2' divided textAlign='center'>
      <Grid.Column>
        <Button.Group vertical>
          {scoreEvents.map(scoreEvent =>
            <ScoreEventButton className='Button-bordered' size='huge' color='blue' onClick={!scoreEvent.player_option ? () => handlePlayer1ScoreClick(scoreEvent) : () => updateScore(scoreEvent.point_value, 0)}>{scoreEvent.name}</ScoreEventButton>
          )}
        </Button.Group>
        <Button.Group vertical>
          {matchEvents.map(matchEvent =>
            <MatchEventButton className='Button-bordered' size='huge' color='green' onClick={!matchEvent.player_option ? () => handlePlayer1MatchClick(matchEvent) : () => newMatchEvent(matchEvent, player1Name)}>{matchEvent.name}</MatchEventButton>
          )}
        </Button.Group>
      </Grid.Column>
      <Grid.Column>
        <Button.Group vertical>
          {scoreEvents.map(scoreEvent =>
            <ScoreEventButton circular size='huge' color='blue' onClick={!scoreEvent.player_option ? () => handlePlayer2ScoreClick(scoreEvent) : () => updateScore(0, scoreEvent.point_value)}>{scoreEvent.name}</ScoreEventButton>
          )}
        </Button.Group>
        <Button.Group vertical>
          {matchEvents.map(matchEvent =>
            <MatchEventButton className='Button-bordered' size='huge' color='green' onClick={!matchEvent.player_option ? () => handlePlayer2MatchClick(matchEvent) : () => newMatchEvent(matchEvent, player1Name)}>{matchEvent.name}</MatchEventButton>
          )}
        </Button.Group>
      </Grid.Column>
    </Grid>
    <Divider hidden />
    <Modal open={player1ScoreModalOpen} onClose={player1ScoreModalClose}>
      <Modal.Content >
        <Input placeholder='Enter info about the score...' onChange={player1ScoreModalChange} value={player1ScoreModalInput} />
        <ConfirmPlayerButton onClick={() => createScoreEvent(player1ScoreModalEvent, player1Name, player1ScoreModalInput)}>Confirm Event</ConfirmPlayerButton>
      </Modal.Content>
    </Modal>
    <Modal open={player2ScoreModalOpen} onClose={player2ScoreModalClose}>
      <Modal.Content>
        <Input placeholder='Enter info about the score...' onChange={player2ScoreModalChange} value={player2ScoreModalInput} />
        <ConfirmPlayerButton onClick={() => createScoreEvent(player2ScoreModalEvent, player2Name, player2ScoreModalInput)}>Confirm Event</ConfirmPlayerButton>
      </Modal.Content>
    </Modal>
    <Modal open={player1MatchModalOpen} onClose={player1MatchModalClose}>
      <Modal.Content>
        <Input placeholder='What just happened?' onChange={player1MatchModalChange} value={player1MatchModalInput} />
        <ConfirmPlayerButton onClick={() => createMatchEvent(player1MatchModalEvent, player1Name, player1MatchModalInput)}>Confirm Event</ConfirmPlayerButton>
      </Modal.Content>
    </Modal>
    <Modal open={player2MatchModalOpen} onClose={player2MatchModalClose}>
      <Modal.Content>
        <Input placeholder='What just happened?' onChange={player2MatchModalChange} value={player2MatchModalInput} />
        <ConfirmPlayerButton onClick={() => createMatchEvent(player2MatchModalEvent, player2Name, player2MatchModalInput)}>Confirm Event</ConfirmPlayerButton>
      </Modal.Content>
    </Modal>
    <Container textAlign='center'>
      <CompleteMatchButton size='massive' color='red' onClick={() => finish(match)}>Complete Match</CompleteMatchButton>
    </Container>
          </>
}

export default ScoreButtons
