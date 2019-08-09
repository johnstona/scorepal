import React from 'react'
import { Header, Button, Grid, Icon, Segment, Form } from 'semantic-ui-react'
import { useForm } from '../../Hooks'

const NewMatch = ({ history, match, createMatch }) => {
  const newMatch = () => {
    createMatch(input, history)
  }

  const initialValues = {
    sport: '',
    user_score: 0,
    opponent_score: 0,
    opponent_name: ''
  }

  const { input, handleChange, handleSubmit } = useForm(newMatch, initialValues)

  return <>
    <Header as='h2' block textAlign='center' color='olive'>New Match</Header>
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='green' textAlign='center'>
          <Icon className='futbol ball' /> Make a new match!
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input onChange={handleChange}
              fluid
              icon='futbol'
              name='sport'
              value={input.sport}
              iconPosition='left'
              placeholder='Which sport?' />
            <Form.Input
              fluid
              name='opponent_name'
              onChange={handleChange}
              value={input.opponent_name}
              icon='user'
              iconPosition='left'
              placeholder='Opponent name'
            />

            <Button onClick={handleSubmit} color='green' fluid size='large'>
            Start match!
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
        </>
}

export default NewMatch
