import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap'
import MenuButton from './MenuButton'

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Navbar color="dark" dark expand="md" className="text-center">
        <NavbarToggler className="mx-auto" onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" d-flex m-2 mx-auto" navbar>
            <MenuButton label="Main" link="/" />
            <MenuButton
              label="Resume"
              link="/resume"
              icon="fas fa-file mr-1"
              openNewTab
            />
            <MenuButton
              label="Portfolio"
              link="/portfolio"
              icon="fas fa-file mr-1"
            />
            <MenuButton
              label="linkedIn"
              link="/linkedin"
              icon="fab fa-linkedin mr-1"
              openNewTab
            />
            <MenuButton
              label="GitHub"
              link="/github"
              icon="fab fa-github mr-1"
              openNewTab
            />
            <MenuButton
              label="Contact"
              link="/resume/contact"
              icon="fas fa-address-book mr-1"
            />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default MenuBar
