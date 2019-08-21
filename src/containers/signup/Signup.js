import React from 'react'
import { useForm } from '../../Hooks'
import { Grid, Header, Icon, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
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

const SignupButton = styled(Button)`
    background-color: rgb(75, 174, 204);
  `;

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
        <Header as='h2' textAlign='center'>
          <Icon className='futbol ball' /> Sign up for an account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Input
              onChange={handleChange}
              fluid
              icon='user'
              name='username'
              value={input.username}
              iconPosition='left'
              placeholder='Username' />
            <Input
              onChange={handleChange}
              fluid
              icon='user'
              name='name'
              value={input.name}
              iconPosition='left'
              placeholder='Name' />
            <Input
              fluid
              name='password'
              onChange={handleChange}
              value={input.password}
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Input
              fluid
              name='confirmPassword'
              onChange={handleChange}
              value={input.confirmPassword}
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
            />

            <SignupButton onClick={handleSubmit} color='green' fluid size='large'>
            Signup
            </SignupButton>
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
