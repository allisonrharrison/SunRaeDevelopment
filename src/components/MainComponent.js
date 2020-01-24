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
    <div>
      <Navbar color="light" light>
      <Nav id="tabs" tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            <h5>Home</h5>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            <h5 style={{}}>About</h5>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            <h5>Projects</h5>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            <h5>Contact</h5>
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
            &nbsp;
            <a
              className="rainbow"
              href="mailto:admin@sunrae.dev?Subject=Business%20Inquiry"
              target="_blank"
              title="Email"
            >
              <i className="fas fa-envelope-square fa-2x"></i>
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
