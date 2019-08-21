import { Grid, Header, Icon, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React from 'react'
import { useForm } from '../../Hooks'
import './Login.css'
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

const LoginButton = styled(Button)`
    background-color: rgb(75, 174, 204);
  `;


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
    <Grid textAlign='center' style={{ height: '60vh', maxWidth: '100vw' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: '100vw' }}>
        <Header as='h2' textAlign='center'>
          <Icon className='futbol ball' /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Input onChange={handleChange} fluid icon='user' name='username' value={input.username} iconPosition='left' placeholder='Username' />
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

            <LoginButton onClick={handleSubmit}>
            Login
            </LoginButton>
          </Segment>
        </Form>
        <Message>
        New to us? <Link to='/signup'>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </>
}

export default LoginForm
