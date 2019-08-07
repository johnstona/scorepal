import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import './NavBar.css'

const NavBar = () => {
  const [active, setActive] = useState()

  const handleClick = (e, { name }) => setActive({ active: name })

  return (
    <Menu className="navbar">

      <Menu.Item name='scorepal' active={active === 'scorepal'} onClick={handleClick}>
          ScorePalLogoHere
      </Menu.Item>

      <Menu.Item
        name='menu'
        active={active === 'menu'}
        onClick={handleClick}
      >
          DropdownMenuHere
      </Menu.Item>
    </Menu>
  )
}

export default NavBar
