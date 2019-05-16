import React from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const MenuButton = ({ link, color, icon, label, openNewTab }) => {
  const newtab = openNewTab ? '_blank' : null
  return (
    <NavLink
      exact
      className="m-1"
      activeClassName="text-warning"
      to={link}
      style={{ color: 'white', textDecoration: 'none' }}
      target={newtab}
    >
      <Button className="w-100" color="primary">
        <i className={icon} />
        {label}
      </Button>
    </NavLink>
  )
}
export default MenuButton
