import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: none;
  padding: 10px 34px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  width: 40%;
  color: white;
  background-color: #27ab6c;
    `;

const BackButton = ({ history }) => {
  return <>
    <Button onClick={() => history.goBack()}>Back</Button>
          </>
}

export default BackButton
