import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "reactstrap";
import { Slide } from "react-reveal";

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="container">
    <Navbar light expand="sm" className="v-nav">
      <NavbarToggler onClick={toggleNavbar} className="" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav>
        <NavbarBrand className="float-sm-right" id="navbarbrand" href="/">
        <h4>
          <i className="fas fa-cloud-sun" style={{color: "steelblue"}}></i> <span  id="navbarlogo">sunrae.dev</span>
        </h4>
      </NavbarBrand>
          <NavItem>
            <NavLink href="/" className="v-navlink">
              <h6>
                <i
                  style={{color: "#6597c1"}}
                  className="fas fa-home fa-sm mr-2"
                ></i>
                home
              </h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about" className="v-navlink">
              <h6>
                <i
                  style={{color: "#6597c1"}}
                  className="fas fa-address-card fa-sm mr-2"
                ></i>
                about
              </h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects" className="v-navlink">
              <h6>
                <i
                  style={{color: "#6597c1"}}
                  className="fas fa-folder-open fa-sm mr-2"
                ></i>
                projects
              </h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact" className="v-navlink">
              <h6>
                <i
                  style={{color: "#6597c1"}}
                  className="fas fa-envelope fa-sm mr-2"
                ></i>
                contact
              </h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://www.linkedin.com/in/allisonrharrison/"
              target="_blank"
              className="v-navlink"
            >
              <h6>
                <i
                  style={{color: "#6597c1"}}
                  className="fab fa-linkedin mr-2"
                ></i>
                linkedin
              </h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://github.com/allisonrharrison"
              target="_blank"
              className="v-navlink"
            >
              <h6>
                <i
                  style={{color: "#6597c1"}}
                  className="fab fa-github-square mr-2"
                ></i>
                github
              </h6>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    </div>
  );
};

export default Navigation;