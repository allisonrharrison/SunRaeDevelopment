import React, { useState } from "react";
import {
  Button,
  CardBody,
  CardImg,
  Card,
  CardDeck,
  CardTitle,
  CardText,
  UncontrolledCollapse
} from "reactstrap";

const Projects = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mt-5">
      {/* PERSONAL PROJECTS */}
      <h5>
        <Button
          color="light"
          className="btn-block"
          id="toggle1"
          style={{ marginBottom: "1rem" }}
        >
          + PERSONAL PROJECTS
        </Button>
      </h5>
      <UncontrolledCollapse toggler="#toggle1">
        <Card style={{ border: "none" }}>
          <CardBody>
            <CardDeck>
              <Card className="text-center col-sm-12 proj">
                <a
                  href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                  target="_blank"
                >
                  <CardImg
                    top
                    src={require("../img/METS_screenshot.png")}
                    alt="Card image cap"
                  />
                </a>
                <CardBody>
                  <CardTitle>
                    <h5>mind's eye tattoo</h5>
                  </CardTitle>
                  <CardText>
                    <p>
                      My first collaborative project: A website for a local
                      tattoo business. I built the home page.
                    </p>
                    <p>
                      <strong>Features:</strong> Bootstrap 4
                    </p>
                  </CardText>
                  <a
                    href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                    target="_blank"
                    className="btn btn-sm btn-dark text-white"
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                </CardBody>
              </Card>
              <Card className="text-center proj col-sm-12">
                <a
                  href="https://github.com/allisonrharrison/ILNP"
                  target="_blank"
                >
                  <CardImg
                    top
                    src={require("../img/ILNP_screenshot.png")}
                    alt="Card image cap"
                  />
                </a>
                <CardBody>
                  <CardTitle>
                    <h5>ilnp</h5>
                  </CardTitle>
                  <CardText>
                    <p>
                      Improving the efficiency of a nail polish company's
                      website.
                    </p>
                    <p>
                      <strong>Features:</strong> React, Redux
                    </p>
                  </CardText>
                  <a
                    href="https://github.com/allisonrharrison/ILNP"
                    target="_blank"
                    className="btn btn-sm btn-dark text-white"
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                </CardBody>
              </Card>
              <Card className="text-center proj col-sm-12">
                <a
                  href="https://github.com/allisonrharrison/SunRae"
                  target="_blank"
                >
                  <CardImg
                    top
                    src={require("../img/sunrae_screenshot.png")}
                    alt="Card image cap"
                  />
                </a>
                <CardBody>
                  <CardTitle>
                    <h5>sun rae development</h5>
                  </CardTitle>
                  <CardText>
                    <p>This website! My personal web development portfolio.</p>
                    <p>
                      <strong>Features:</strong> Bootstrap 4
                    </p>
                  </CardText>
                  <a
                    href="https://github.com/allisonrharrison/SunRae"
                    target="_blank"
                    className="btn btn-sm btn-dark text-white"
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                </CardBody>
              </Card>
            </CardDeck>
          </CardBody>
        </Card>
      </UncontrolledCollapse>

      {/* JUST FOR FUN */}

      <h5>
        <Button
          color="light"
          className="btn-block"
          id="toggle2"
          style={{ marginBottom: "1rem" }}
        >
          + JUST FOR FUN
        </Button>
      </h5>
      <UncontrolledCollapse toggler="#toggle2">
        <Card style={{ border: "none" }}>
          <CardBody>
            <CardDeck>
              <Card className="card text-center proj col-sm-12">
                <a
                  href="https://codepen.io/allisonrharrison/pen/ExYXJoe"
                  target="_blank"
                >
                  <CardImg
                    top
                    src={require("../img/leapyear_screenshot.png")}
                    alt="Card image cap"
                  />
                </a>
                <CardBody>
                  <CardTitle>
                    <h5>leap year calculator</h5>
                  </CardTitle>
                  <CardText>
                    <p className="card-text">
                      A basic app which will take in any year & calculate if it
                      is a Leap Year.
                    </p>
                    <p className="card-text">
                      <strong>Features:</strong> HTML, CSS, JavaScript
                    </p>
                  </CardText>
                  <a
                    href="https://codepen.io/allisonrharrison/pen/ExYXJoe"
                    target="_blank"
                    className="btn btn-sm btn-dark text-white"
                  >
                    <i className="fab fa-codepen"></i> Demo on CodePen
                  </a>
                </CardBody>
              </Card>
              <Card className="text-center proj col-sm-12">
                <a
                  href="https://codepen.io/allisonrharrison/pen/PoYjgRZ"
                  target="_blank"
                >
                  <CardImg
                    top
                    src={require("../img/eightball_screenshot.png")}
                    alt="Card image cap"
                  />
                </a>
                <CardBody>
                  <CardTitle>
                    <h5>magic eight ball</h5>
                  </CardTitle>
                  <CardText>
                    <p>
                      Input a question & the app will randomly generate your
                      fortune.
                    </p>
                    <p>
                      <strong>Features:</strong> HTML, CSS, JavaScript
                    </p>
                  </CardText>
                  <a
                    href="https://codepen.io/allisonrharrison/pen/PoYjgRZ"
                    target="_blank"
                    className="btn btn-sm btn-dark text-white"
                  >
                    <i className="fab fa-codepen"></i> Demo on CodePen
                  </a>
                </CardBody>
              </Card>
              <Card className="text-center proj col-sm-12">
                <a
                  href="https://codepen.io/allisonrharrison/pen/YzKxLoz"
                  target="_blank"
                >
                  <CardImg
                    top
                    src={require("../img/matchgame_screenshot.png")}
                    alt="Card image cap"
                  />
                </a>
                <CardBody>
                  <CardTitle>
                    <h5>smiley matching game</h5>
                  </CardTitle>
                  <CardText>
                    <p>
                      Click the extra smiley on the left to advance to the next
                      level.
                    </p>
                  </CardText>
                  <p>
                    <strong>Features:</strong> HTML, CSS, JavaScript
                  </p>
                  <a
                    href="https://codepen.io/allisonrharrison/pen/YzKxLoz"
                    target="_blank"
                    className="btn btn-sm btn-dark text-white"
                  >
                    <i className="fab fa-codepen"></i> Demo on CodePen
                  </a>
                </CardBody>
              </Card>
            </CardDeck>
          </CardBody>
        </Card>
      </UncontrolledCollapse>

      {/* SCHOOL PROJECTS */}

      <h5>
        <Button
          color="light"
          className="btn-block"
          id="toggle3"
          style={{ marginBottom: "1rem" }}
        >
          + SCHOOL PROJECTS
        </Button>
      </h5>
      <UncontrolledCollapse toggler="#toggle3">
        <Card style={{ border: "none" }}>
          <CardBody>
            <CardDeck>
              <Card className="text-center proj col-sm-12">
                <a
                  href="https://github.com/allisonrharrison/conFusion"
                  target="_blank"
                >
                  <CardImg
                    top
                    src={require("../img/bootstrapcourse_screenshot.png")}
                    alt="Card image cap"
                  />
                </a>
                <CardBody>
                  <CardTitle>
                    <h5>bootstrap course</h5>
                  </CardTitle>
                  <CardText>
                    <p>
                      Webpage for a fictional restaurant with an adaptive layout
                      for all screen sizes.
                    </p>
                    <p>
                      <strong>Features:</strong> Bootstrap 4, Grunt
                    </p>
                  </CardText>
                  <a
                    href="https://github.com/allisonrharrison/conFusion"
                    target="_blank"
                    className="btn btn-sm btn-dark text-white"
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                </CardBody>
              </Card>
              <Card className="text-center proj col-sm-12">
                <a
                  href="https://github.com/allisonrharrison/React"
                  target="_blank"
                >
                  <CardImg
                    top
                    src={require("../img/reactcourse_screenshot.png")}
                    alt="Card image cap"
                  />
                </a>
                <CardBody>
                  <CardTitle>
                    <h5>react course</h5>
                  </CardTitle>
                  <CardText>
                    <p>
                      A single-page application for a fictional restaurant with
                      rating, comment, and favorite functionality.
                    </p>
                    <p>
                      <strong>Features:</strong> React, Redux
                    </p>
                  </CardText>
                  <a
                    href="https://github.com/allisonrharrison/React"
                    target="_blank"
                    className="btn btn-sm btn-dark text-white"
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                </CardBody>
              </Card>
              <Card className="text-center proj col-sm-12">
                <a
                  href="https://github.com/allisonrharrison/NativeConfusion"
                  target="_blank"
                >
                  <CardImg top src="" alt="Card image cap" />
                </a>
                <CardBody>
                  <CardTitle>
                    <h5>react native course</h5>
                  </CardTitle>
                  <CardText>
                    <p>
                      An Android application for a fictional restaurant,
                      implementing social media sharing, notifications, camera,
                      and calendar functionality.
                    </p>
                    <p>
                      <strong>Features:</strong> React Native
                    </p>
                  </CardText>
                  <a
                    href="https://github.com/allisonrharrison/NativeConfusion"
                    target="_blank"
                    className="btn btn-sm btn-dark text-white"
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                </CardBody>
              </Card>
              <Card className="text-center proj col-sm-12">
                <a
                  href="https://github.com/allisonrharrison/conFusionServer"
                  target="_blank"
                >
                  <CardImg top src="" alt="Card image cap" />
                </a>
                <CardBody>
                  <CardTitle>
                    <h5>back-end course</h5>
                  </CardTitle>
                  <CardText>
                    <p>
                      Server and database for a fictional restaurant with
                      routing and authentication.
                    </p>
                    <p className="card-text">
                      <strong>Features:</strong> Node.js, Express, MongoDB
                    </p>
                  </CardText>
                  <a
                    href="https://github.com/allisonrharrison/conFusionServer"
                    target="_blank"
                    className="btn btn-sm btn-dark text-white"
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                </CardBody>
              </Card>
            </CardDeck>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
};

export default Projects;
