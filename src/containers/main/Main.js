import React from 'react'
import { Button, Container, Divider } from 'semantic-ui-react'
import Welcome from '../../components/welcome/Welcome'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

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

const LoginButton = styled(button)`
  background-color: rgb(75, 174, 204);
`;

const SignupButton = styled(button)`
  background-color: #9882b8
  `;

const Main = () => {
  return <Container textAlign='center'>
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Welcome />
    <Divider hidden />
    <Container textAlign='center'>
      <Button.Group vertical>
        <Link to='/login'>
          <LoginButton>Login</LoginButton>
        </Link>
        <Link to='/signup'>
          <SignupButton>Signup</SignupButton>
        </Link>
      </Button.Group>
    </Container>
        </Container>
}

export default Main
