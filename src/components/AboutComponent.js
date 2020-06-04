import React from "react";
import { Button, ButtonGroup, Container, Row, Col } from "reactstrap";
import { Fade } from "react-reveal";

function About() {
  return (
    <Container className="mb-5">
      <Fade>
        <h3>ABOUT ME</h3>
        <Row className="mt-5">
          <Col sm="8" md="5" id="imgcontainer">
            <img
              id="allison"
              className="mb-5"
              src={require("../img/allison2.jpg")}
            />
          </Col>
          <Col sm="5" id="txtcontainer">
            <h6>Hi! I'm Allison.</h6>
            <p className="text-justify">
              I'm a junior Web Developer in Tacoma, WA. I'm looking forward to
              joining my very first development team and building some really
              cool stuff on the Web.
            </p>
            <h6 className="pt-4">Certification:</h6>
            <p className="text-center">
              Full-Stack Web Development (
              <a href="https://www.nucamp.co/">NuCamp</a>, Jan '20)
            </p>

            <h6 className="pt-4">Volunteer:</h6>
            <p className="text-center">
              Tacoma JavaScript Club (CoFounder, 2020-)
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
    </Container>
  );
}

export default About;
