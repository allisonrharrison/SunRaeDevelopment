import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { Fade } from "react-reveal";

function About() {
  return (
    <div className="container mb-5">
      <Fade>
        <h3>ABOUT ME</h3>
        <div className="row mt-5">
          <div id="imgcontainer" className="col-6">
            <img
              id="allison"
              className="mb-5"
              src={require("../img/allison2.jpg")}
            />
            <br />
            <ButtonGroup vertical className="menu">
              <Button
                href="https://www.linkedin.com/in/allisonrharrison/"
                target="_blank"
                className="aboutbtn"
              >
                <i
                  className="fab fa-linkedin mr-2"
                ></i>
                connect on linkedin
              </Button>
              <Button
                href="https://github.com/allisonrharrison"
                target="_blank"
                className="aboutbtn"
              >
                <i
                  className="fab fa-github-square mr-2"
                ></i>
                view my github
              </Button>
              <Button
                className="aboutbtn"
                href="http://s000.tinyupload.com/download.php?file_id=00623527908424394622&t=0062352790842439462287656"
              >
                <i
                  className="fas fa-download mr-2"
                ></i>
                download my resume (.pdf)
              </Button>
            </ButtonGroup>
          </div>
          <div id="txtcontainer" className="col-5">
            <h6>Hi! I'm Allison.</h6>
            <p className="text-center">
              I'm a junior Web Developer in Tacoma, WA. I'm looking forward to
              joining my very first development team and building some really
              cool stuff on the Web.
            </p>
            <h6>Certification:</h6>
            <p className="text-center">
              Full-Stack Web Development (
              <a href="https://www.nucamp.co/">NuCamp</a>, Jan '20)
            </p>

            <h6>Volunteer:</h6>
            <p className="text-center">
              Tacoma JavaScript Club (CoFounder, 2020-)
            </p>

            <h6>Current Skills:</h6>
            <div className="row justify-content-center">
            <div className="col-3">
              <div className="row">
                <i className="fab fa-html5 fa-5x"></i>
                </div>
                <div className="row"><p>HTML 5</p>
                </div>
                </div>
                <div className="col-3">
              <div className="row">
              <i className="fab fa-css3-alt fa-5x"></i>
                </div>
                <div className="row"><p>CSS 3</p>
                </div>
                </div>
                <div className="col-3">
              <div className="row">
              <i className="fab fa-js-square fa-5x"></i>
                </div>
                <div className="row"><p>JavaScript</p>
                </div>
                </div>
                <div className="col-3">
              <div className="row">
              <i className="fab fa-react fa-5x"></i>
                </div>
                <div className="row"><p>React/Redux</p>
                </div>
                </div>
            </div>
            <div className="row">
              <div className="col-6">
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
              </div>
              <div className="col-6">
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
              </div>
            </div>
            <p className="text-center mt-3">
              Want to add me to your team? <a href="#contact">Contact me</a>.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default About;
