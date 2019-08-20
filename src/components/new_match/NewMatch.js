import React from 'react'
import { Header, Button, Grid, Icon, Segment, Form, Dropdown } from 'semantic-ui-react'
import { useForm } from '../../Hooks'

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

  return <>
    <Header as='h2' block textAlign='center' color='olive'>New Match</Header>
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
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
            <Form.Input
              fluid
              name='opponent_name'
              onChange={handleChange}
              value={input.opponent_name}
              icon='user'
              iconPosition='left'
              placeholder='Opponent name'
            />
            <Form.Input
              fluid
              name='opponent_username'
              onChange={handleChange}
              value={input.opponent_username}
              icon='user'
              iconPosition='left'
              placeholder='or opponent username'
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
