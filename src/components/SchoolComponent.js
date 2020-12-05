import React, { Component } from "react";
import {
  Button,
  CardBody,
  CardTitle,
  CardImg,
  Card,
  CardDeck,
  CardText
} from "reactstrap";
import { Fade } from "react-reveal";

class School extends React.Component {
  render() {
    return (
      <div id="school-projects" className="mb-5">
        <Fade>
          <div>
            <CardTitle>
            <h3 className="mb-5">SCHOOL PROJECTS</h3>
            </CardTitle>
            <CardBody>
              <CardDeck>
                {/* BOOTSTRAP */}
                <Card className="text-center proj col-sm-12 p-0">
                  <a
                    href="https://allisonrharrison.github.io/conFusion/"
                    target="_blank"
                  >
                    <CardImg
                      top
                      src={require("../img/bootstrap_cardsize.png").default}
                      alt="Card image cap"
                      height="180px" width="318px"
                    />
                  </a>
                  <CardBody>
                    <CardTitle>
                      <h6>bootstrap course</h6>
                    </CardTitle>
                    <CardText>
                      <p>
                        Webpage for a fictional restaurant with an adaptive
                        layout for all screen sizes.
                      </p>
                      <p>
                        <strong>Features:</strong> Bootstrap 4, jQuery
                      </p>
                    </CardText>
                    <hr />
                    <Button
                      className="aboutbtn"
                      href="https://allisonrharrison.github.io/conFusion/"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fas fa-external-link-alt fa-sm"></i> Visit
                      Site
                    </Button>

                    <Button
                      className="aboutbtn"
                      href="https://github.com/allisonrharrison/conFusion"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </Button>
                  </CardBody>
                </Card>

                {/* REACT */}
                <Card className="text-center proj col-sm-12 p-0">
                  <a
                    href="https://allisonrharrison.github.io/React/"
                    target="_blank"
                  >
                    <CardImg
                      top
                      src={require("../img/reactcourse_screenshot.png").default}
                      alt="Card image cap"
                      height="180px" width="318px"
                    />
                  </a>
                  <CardBody>
                    <CardTitle>
                      <h6>react course</h6>
                    </CardTitle>
                    <CardText>
                      <p>
                        A single-page React application for a fictional restaurant
                        with rating, comment, and favorite functionality.
                      </p>
                      <p>
                        <strong>Features:</strong> React, Redux, Firebase
                      </p>
                    </CardText>
                    <hr />
                    <Button
                      className="aboutbtn"
                      href="https://allisonrharrison.github.io/React/"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fas fa-external-link-alt fa-sm"></i> Visit
                      Site
                    </Button>
                    <Button
                      className="aboutbtn"
                      href="https://github.com/allisonrharrison/React"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </Button>
                  </CardBody>
                </Card>

                {/* REACT NATIVE */}
                <Card className="text-center proj col-sm-12 p-0">
                  <a
                    href="https://snack.expo.io/@allisonrharrison/1e6972"
                    target="_blank"
                  >
                    <CardImg top src={require("../img/nativeapp_cardsize.png").default} alt="Card image cap" height="180px" width="318px"/>
                  </a>
                  <CardBody>
                    <CardTitle>
                      <h6>react native course</h6>
                    </CardTitle>
                    <CardText>
                      <p>
                        An Android application for a fictional restaurant,
                        implementing social media sharing, notifications,
                        camera, and calendar functionality.
                      </p>
                      <p>
                        <strong>Features:</strong> React Native, Redux, NodeJS, Express, MongoDB
                      </p>
                    </CardText>
                    <hr />
                    <Button
                      className="aboutbtn"
                      href="https://snack.expo.io/@allisonrharrison/1e6972"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fas fa-cubes fa-sm"></i> Demo on Snack
                    </Button>

                    <Button
                      className="aboutbtn"
                      href="https://github.com/allisonrharrison/NativeConfusion"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fab fa-github fa-sm"></i> View on GitHub
                    </Button>
                  </CardBody>
                </Card>

                {/* EXPRESS 
            <Card className="text-center proj col-sm-12">
              <a
                href="https://github.com/allisonrharrison/conFusionServer"
                target="_blank"
              >
                <CardImg top src="" alt="Card image cap" />
              </a>
              <CardBody>
                <CardTitle>
                  <h6>express server</h6>
                </CardTitle>
                <CardText>
                  <p>
                    Server and database for a fictional restaurant with routing
                    and authentication.
                  </p>
                  <p className="card-text">
                    <strong>Features:</strong> Node.js, Express, MongoDB
                  </p>
                </CardText>
                <a href="/" target="_blank" size="sm"
                >
                  <i className="fas fa-external-link-alt fa-sm"></i> Visit Site
                </a>
                &nbsp;
                <a
                  href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                  target="_blank"
                  size="sm"
                  
                >
                  <i className="fab fa-github"></i> View on GitHub
                </a>
              </CardBody>
            </Card>*/}
              </CardDeck>
            </CardBody>
          </div>
        </Fade>
      </div>
    );
  }
}

export default School;
