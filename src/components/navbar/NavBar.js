import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import './NavBar.css'

const NavBar = ({ history }) => {
  const [active, setActive] = useState()
  const [redirect, toggleRedirect] = useState(false)
  const [url, setUrl] = useState()

  const handleDropdown = (url) => {
    toggleRedirect(true)
    setUrl(url)
  }

  const renderRedirect = () => {
    return redirect ? <Redirect to={`/${url}`} /> : null
  }

  const handleClick = (e, { name }) => setActive({ active: name })

  return (<>
    <Menu className='navbar'>

      <Menu.Item name='scorepal' active={active === 'scorepal'} onClick={handleClick}>
          ScorePalLogoHere
      </Menu.Item>

      <Menu.Menu position='right'>
        <Dropdown item text='Navigation'>
          <Dropdown.Menu>
            <Dropdown.Item value='matches' key='matches' onClick={() => handleDropdown('matches')}>Matches</Dropdown.Item>
            <Dropdown.Item value='social' onClick={() => handleDropdown('social')}>Social</Dropdown.Item>
            <Dropdown.Item value='logout' onClick={() => handleDropdown('logout')}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
    {renderRedirect()}
    </>
  )
}

export default NavBar
