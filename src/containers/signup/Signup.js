import React from 'react'
import { useForm } from '../../Hooks'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SignupForm = ({ history, signupUser }) => {
  const signup = () => {
    signupUser(input, history)
  }

  const randomAvatar = Math.floor((Math.random() * 10) + 1)

  const initialValues = {
    username: '',
    name: '',
    password: '',
    confirmPassword: '',
    avatar: randomAvatar
  }

  const { input, handleChange, handleSubmit } = useForm(signup, initialValues)

  return <>
    <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='green' textAlign='center'>
          <Icon className='futbol ball' /> Sign up for an account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              onChange={handleChange}
              fluid
              icon='user'
              name='username'
              value={input.username}
              iconPosition='left'
              placeholder='Username' />
            <Form.Input
              onChange={handleChange}
              fluid
              icon='user'
              name='name'
              value={input.name}
              iconPosition='left'
              placeholder='Name' />
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
            <Form.Input
              fluid
              name='confirmPassword'
              onChange={handleChange}
              value={input.confirmPassword}
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
            />

            <Button onClick={handleSubmit} color='green' fluid size='large'>
            Signup
            </Button>
          </Segment>
        </Form>
        <Message>
        Already have an account? <Link to='/login'>Log in</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </>
}

export default SignupForm
