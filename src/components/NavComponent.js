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
      <Navbar light expand="sm" className="v-nav">
        <NavbarToggler onClick={toggleNavbar} className="" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav>
            <NavItem>
              <NavLink href="#home" className="v-navlink">
                <h6>
                  <i
                    style={{ color: "steelblue" }}
                    className="fas fa-home fa-sm"
                  ></i>{" "}
                  home
                </h6>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about" className="v-navlink">
                <h6>
                  <i
                    style={{ color: "steelblue" }}
                    className="fas fa-address-card fa-sm"
                  ></i>{" "}
                  about
                </h6>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects" className="v-navlink">
                <h6>
                  <i
                    style={{ color: "steelblue" }}
                    className="fas fa-folder-open fa-sm"
                  ></i>{" "}
                  projects
                </h6>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" className="v-navlink">
                <h6>
                  <i
                    style={{ color: "steelblue" }}
                    className="fas fa-envelope fa-sm"
                  ></i>{" "}
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
                    style={{ color: "steelblue" }}
                    className="fab fa-linkedin"
                  ></i>{" "}
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
                    style={{ color: "steelblue" }}
                    className="fab fa-github-square"
                  ></i>{" "}
                  github
                </h6>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
};

export default Navigation;
