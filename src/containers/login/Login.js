import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import React from 'react'
import { useForm } from '../../Hooks'

const LoginForm = ({ history, loginUser }) => {
  const login = () => {
    loginUser(input, history)
  }

  const initialValues = {
    username: '',
    password: ''
  }

  const { input, handleChange, handleSubmit } = useForm(login, initialValues)

  return <>
    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='green' textAlign='center'>
          <Icon className='futbol ball' /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input onChange={handleChange} fluid icon='user' name='username' value={input.username} iconPosition='left' placeholder='Username' />
            <Form.Input
              fluid
              name='password'
              onChange={handleChange}
              value={input.password}
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button onClick={handleSubmit} color='green' fluid size='large'>
            Login
            </Button>
          </Segment>
        </Form>
        <Message>
        New to us? <a href='/signup'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </>
}

export default LoginForm
