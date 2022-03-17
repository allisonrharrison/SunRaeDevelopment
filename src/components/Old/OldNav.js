import React, { useState } from 'react'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="container-fluid">
      <Navbar dark expand="md">
        <NavbarBrand id="navbarbrand" href="/">SUNRAE.DEV</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar id="the-nav">
          <NavItem>
            <NavLink className="navlink" href="#about-me">
              ABOUT ME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="navlink"
              href="#web-projects"
            >
              WEB PROJECTS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="navlink"
              href="#games-apps"
            >
              GAMES & APPS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="navlink"
              href="#school-projects"
            >
              SCHOOL PROJECTS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="navlink"
              href="#contact"
            >
              CONTACT ME
            </NavLink>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
