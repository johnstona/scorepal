import React from 'react'
import { Header, Grid, Icon, Dropdown, Container } from 'semantic-ui-react'
import { useForm } from '../../Hooks'

import styled from 'styled-components'

const Input = styled.input`
  padding: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  color: rgb(138, 40, 40);
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 80%;
  box-shadow: 0 0 2px 2px rgb(203, 155, 155);
`;

const Form = styled.form``

const Segment = styled.div``

const Button = styled.button`
  border: none;
  padding: 10px 34px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 0.5em;
  cursor: pointer;
  border-radius: 8px;
  width: 80%;
  color: white;
  box-shadow: 0 0 1px 1px #888;
    `;

const NewMatchButton = styled(Button)`
    background-color: rgb(75, 174, 204);
  `;

const NewMatch = ({ history, match, createMatch, sports }) => {
  const newMatch = () => {
    createMatch(input, history)
  }

  const initialValues = {
    sport: '',
    user_score: 0,
    opponent_score: 0,
    opponent_name: '',
    opponent_username: '',
    live: true
  }

  const sportOptions = sports && sports.map(sport => {
    return { key: sport.id, value: sport.attributes.name, text: sport.attributes.name }
  })

  const { input, handleChange, handleSubmit, handleDropdownChange } = useForm(newMatch, initialValues)

  return <Container textAlign='center'>
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: '100vw' }}>
        <Header as='h2' color='green' textAlign='center'>
          <Icon className='futbol ball' /> Make a new match!
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Dropdown onChange={handleDropdownChange}
              name='sport'
              placeholder='Select Sport'
              fluid
              selection
              options={sportOptions} />
            <Input
              fluid
              name='opponent_name'
              onChange={handleChange}
              value={input.opponent_name}
              icon='user'
              iconPosition='left'
              placeholder='Opponent name'
            />
            <Input
              fluid
              name='opponent_username'
              onChange={handleChange}
              value={input.opponent_username}
              icon='user'
              iconPosition='left'
              placeholder='or opponent username'
            />
            <NewMatchButton onClick={handleSubmit}>
            Start match!
            </NewMatchButton>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
        </Container>
}

export default NewMatch
