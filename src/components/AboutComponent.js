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
            <img id="allison" className="mb-5" src={require("../img/allison.jpeg")} />
            <br />
            <ButtonGroup vertical>
            <Button className="aboutbtn">
              <i style={{ color: "steelblue" }}
                    className="fab fa-linkedin mr-2"
                  ></i>connect on linkedin</Button>
            <Button className="aboutbtn"><i style={{ color: "steelblue" }}
                    className="fab fa-github-square mr-2"
                  ></i>view my github</Button>
            <Button className="aboutbtn">
              <i style={{ color: "steelblue" }} className="fas fa-download mr-2"></i>download my resume
              </Button>
            </ButtonGroup>
            </div>
            <div id="txtcontainer" className="col-7">
              <p><strong>Hi! I'm Allison.</strong></p>
              <p>
                I'm a Web Developer and recent <a href="https://www.nucamp.co/">NuCamp</a> graduate in Tacoma, WA.
              </p>
              <p>Current Skills:</p>
              <ul>
                <li>HTML5</li>
                <li>CSS3 | SCSS</li>
                <li>Bootstrap 4</li>
                <li>JavaScript ES6 | JSX</li>
                <li>React | React Native | Redux</li>
                <li>Git | GitHub</li>
                <li>NPM | Yarn</li>
                <li>Visual Studio Code</li>
              </ul>
          </div>
          </div>
      </Fade>
    </div>
  );
}

export default About;
