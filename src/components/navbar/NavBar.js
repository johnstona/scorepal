import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import './NavBar.css'

const NavBar = () => {
  const [redirect, toggleRedirect] = useState(false)
  const [url, setUrl] = useState()

  const handleDropdown = (url) => {
    toggleRedirect(true)
    setUrl(url)
  }

  const renderRedirect = () => {
    return redirect ? <Redirect to={`/${url}`} /> : null
  }

  return (<>
    <Menu className='navbar'>

      <Menu.Item name='scorepal' onClick={() => handleDropdown('home')}>
          SC<Icon className='futbol ball'/>REPAL
      </Menu.Item>

      <Menu.Menu position='right'>
        <Dropdown item text='Navigation'>
          <Dropdown.Menu>
            <Dropdown.Item value='home' key='home' onClick={() => handleDropdown('home')}>Home</Dropdown.Item>
            <Dropdown.Item value='matches' key='matches' onClick={() => handleDropdown('matches')}>Matches</Dropdown.Item>
            <Dropdown.Item value='social' onClick={() => handleDropdown('social')}>Social</Dropdown.Item>
            <Dropdown.Item value='logout' onClick={() => handleDropdown('')}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
    {renderRedirect()}
    </>
  )
}

export default NavBar
