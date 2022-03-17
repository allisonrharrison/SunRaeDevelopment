import React from 'react'
import { Button, ButtonGroup, Container, Row, Col } from 'reactstrap'
import { Fade } from 'react-reveal'

function About () {
  return (
    <div id="about-me" className="mb-5">
      <Fade>
        <h3>ABOUT ME</h3>
        <Row className="mt-5">
          <Col sm="8" md="5" id="imgcontainer">
            <img
              id="allison"
              className="mb-5"
              src={require('../img/allison_umbrella.jpg').default}
            />
          </Col>
          <Col sm="5" id="txtcontainer">
            <h6>Hi! I'm Allison.</h6>
            <p className="text-justify">
              I'm a Web Developer in Tacoma, Washington. I love all
              things JavaScript, and proudly specialize in React & React Native
              development.
            </p>
            <h6 className="pt-4">Experience:</h6>
            <p className="text-center">
              Jr. Web Developer (<a href="https://vsg360.com/">VSG Marketing</a>
              , Aug '20 - Present)
            </p>
            <h6 className="pt-4">Education:</h6>
            <p className="text-center">
              Full-Stack Web Development (
              <a href="https://www.nucamp.co/">NuCamp</a>, Jan '20)
            </p>
            <p className="text-center">
              Web Development (
              <a href="https://www.codecademy.com/learn/paths/web-development">
                Codecademy Pro
              </a>
              , Jan '21)
            </p>
            <h6 className="pt-4">Current Skills:</h6>
          </Col>
        </Row>
        <Row className="skill-icons">
          <i className="fab fa-html5 fa-3x"></i>
          <i className="fab fa-css3-alt fa-3x"></i>
          <i className="fab fa-js-square fa-3x"></i>
          <i className="fab fa-react fa-3x"></i>
        </Row>
        <Row className="skill-icons">
          <p>HTML 5</p>
          <p>CSS 3</p>
          <p>JavaScript</p>
          <p>React/Redux</p>
        </Row>
        <Row>
          <Col>
            <p className="text-right">
              Bootstrap 4
              <br />
              Less | Sass
              <br />
              React Native
              <br />
              NodeJS | Express
              <br />
              MongoDB
              <br />
            </p>
          </Col>
          <Col>
            <p className="text-left">
              Google Firebase
              <br />
              Git | GitHub
              <br />
              NPM | Yarn
              <br />
              Visual Studio Code
              <br />
              Bash
            </p>
          </Col>
              </Row>
      </Fade>
    </div>
  )
}

export default About
