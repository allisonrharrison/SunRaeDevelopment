import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { Fade } from "react-reveal";

function About() {
  return (
    <div className="panel" id="about">
      <Fade>
        <h3>ABOUT ME</h3>
        <div className="row mt-5">
          <div id="imgcontainer" className="col-5">
            <img
              id="allison"
              className="mb-5"
              src={require("../img/allison2.jpg")}
            />
            <br />
            <ButtonGroup vertical>
              <Button
                href="https://www.linkedin.com/in/allisonrharrison/"
                target="_blank"
                className="aboutbtn"
              >
                <i
                  style={{ color: "steelblue" }}
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
                  style={{ color: "steelblue" }}
                  className="fab fa-github-square mr-2"
                ></i>
                view my github
              </Button>
              <Button
                className="aboutbtn"
                href="http://s000.tinyupload.com/download.php?file_id=00623527908424394622&t=0062352790842439462287656"
              >
                <i
                  style={{ color: "steelblue" }}
                  className="fas fa-download mr-2"
                ></i>
                download my resume (.pdf)
              </Button>
            </ButtonGroup>
          </div>
          <div id="txtcontainer" className="col-6">
            <p>
              <strong>Hi! I'm Allison.</strong>
            </p>
            <p>I'm a junior Web Developer in Tacoma, WA. I'm looking forward to joining my very first development team and building some really cool stuff on the Web.</p>
            <p><strong>Certification:</strong></p>
            <ul>
              <li>
                Full-Stack Web Development (
                <a href="https://www.nucamp.co/">NuCamp</a>, Jan '20)
              </li>
            </ul>
            <p><strong>Volunteer:</strong></p>
            <ul>
              <li>Tacoma JavaScript Club (CoFounder, 2020-)</li>
            </ul>
            <p><strong>Current Skills:</strong></p>
            <ul>
              <li>HTML 5</li>
              <li>Bootstrap 4</li>
              <li>JavaScript ES6</li>
              <li>CSS 3, Less, Sass</li>
              <li>React, React Native, Redux</li>
              <li>NodeJS, Express, MongoDB</li>
              <li>Google Firebase</li>
              <li>Git, GitHub</li>
              <li>NPM, Yarn</li>
              <li>VS Code</li>
              <li>Bash</li>
            </ul>
            <p>
              Want to add me to your team? <a href="#contact">Contact me</a>.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default About;
