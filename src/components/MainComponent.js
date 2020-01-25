import React, { useState } from "react";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Projects from "./ProjectsComponent";
import Contact from "./ContactComponent";
import {
  TabContent,
  TabPane,
  Nav,
  Navbar,
  NavbarText,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

const Main = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div width="90%">
      <Navbar>
      <Nav tabs id="tabs">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            <h6 className="navtabs"><i style={{color: "steelblue"}} className="fas fa-home"></i> home</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            <h6 className="navtabs"><i style={{color: "steelblue"}} className="fas fa-address-card"></i> about</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            <h6 className="navtabs"><i style={{color: "steelblue"}} className="fas fa-folder-open"></i> portfolio</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            <h6 className="navtabs"><i style={{color: "steelblue"}} className="fas fa-envelope"></i> contact</h6>
          </NavLink>
        </NavItem>
        </Nav>
      <NavbarText>
        <span id="social">
            <a
              className="rainbow"
              href="https://www.linkedin.com/in/allisonrharrison/"
              target="_blank"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            &nbsp;
            <a
              className="rainbow"
              href="https://github.com/allisonrharrison"
              target="_blank"
              title="GitHub"
            >
              <i className="fab fa-github-square fa-2x"></i>
            </a>
            </span>
          </NavbarText>
          </Navbar>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Home />
        </TabPane>
        <TabPane tabId="2">
          <About />
        </TabPane>
        <TabPane tabId="3">
          <Projects />
        </TabPane>
        <TabPane tabId="4">
          <Contact />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Main;
