import React, { Component } from "react";
import { UncontrolledCollapse, CardBody, Card } from "reactstrap";
import { Fade } from 'react-reveal';
import About from "./AboutComponent";
import Personal from "./PersonalComponent";
import Fun from "./FunComponent";
import School from "./SchoolComponent";
import Contact from "./ContactComponent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
      <div id="sun">
        <div className="row mt-3">
<div className="accordion offset-5" id="abouttoggler">
<h3 id="about">about<br />me</h3>
        </div>
        </div>
        <div className="row">
        <UncontrolledCollapse toggler="#abouttoggler">
          <Card>
            <CardBody>
              <About />
            </CardBody>
          </Card>
        </UncontrolledCollapse>
        <div className="accordion offset-2" id="projecttoggler">
          <h3 id="projects">my<br />projects</h3>
        </div>
        <UncontrolledCollapse toggler="#projecttoggler">
          <Card>
            <CardBody>
              <Personal />
              <Fun />
            </CardBody>
          </Card>
        </UncontrolledCollapse>
        <div id="center" className="col-4">
        <h1 id="logo">
            &nbsp;SUN
            <br />
             &nbsp;RAE
            <br />
            .DEV
          </h1>
          <h4>FULL STACK WEB DEVELOPMENT</h4>
          <p id="poweredby">
            {this.state.isHovering && (
              <i id="atom" className="fab fa-react fa-lg fa-spin"></i>
            )}
            {!this.state.isHovering && <i id="atom" className="fab fa-react fa-lg"></i>}{" "}
            POWERED BY{" "}
            
                <a className="react"                 onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover} href="https://reactjs.org/">
                REACT.js
                </a> 
          </p>
          </div>
        <div className="accordion" id="schooltoggler">
          <h3 id="school">school<br />projects</h3>
        </div>
        <UncontrolledCollapse toggler="#schooltoggler">
          <Card>
            <CardBody>
              <School />
            </CardBody>
          </Card>
        </UncontrolledCollapse>
</div>
<div className="row">
<div className="accordion offset-5" id="contacttoggler">
          <h3 id="contact">contact</h3>
        </div>
        <UncontrolledCollapse toggler="#contacttoggler">
          <Card>
            <CardBody>
              <Contact />
            </CardBody>
          </Card>
        </UncontrolledCollapse>
        </div>
          <Fade>
          </Fade>
          </div>
    );
  }
}

export default Home;
