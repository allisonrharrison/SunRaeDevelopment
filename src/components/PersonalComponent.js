import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  CardBody,
  CardTitle,
  CardImg,
  Card,
  CardDeck,
  CardText,
} from "reactstrap";
import { Fade } from "react-reveal";

class Personal extends React.Component {
  render() {
    return (
      <div className="mb-5">
        <Fade>
          <div>
            <h3 className="mb-5">PERSONAL PROJECTS</h3>
            <CardBody>
              <CardDeck className="row mb-5">
                {/* MIND'S EYE TATTOO STUDIO */}
                <Card className="text-center col-sm-12 proj p-0">
                  <a
                    href="https://allisonrharrison.github.io/MindsEyeTattooStudio/index.html"
                    target="_blank"
                  >
                    <CardImg
                      top
                      src={require("../img/mindseye_cardsize.png")}
                      alt="Card image cap"
                      height="180px"
                      width="318px"
                      className="cardimg"
                    />
                  </a>
                  <CardBody>
                    <CardTitle>
                      <h6>mind's eye tattoo</h6>
                    </CardTitle>
                    <CardText className="mt-3">
                      <p>A website for a local tattoo business.</p>
                      <p>
                        <strong>Features:</strong> Bootstrap 4
                      </p>
                    </CardText>
                    <hr />
                    <Button
                      className="aboutbtn"
                      href="https://allisonrharrison.github.io/MindsEyeTattooStudio/index.html"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fas fa-external-link-alt fa-sm"></i> Visit
                      Site
                    </Button>
                    <Button
                      className="aboutbtn"
                      href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </Button>
                  </CardBody>
                </Card>
                {/* ILNP */}
                <Card className="text-center proj col-sm-12 p-0">
                  <a
                    href="https://allisonrharrison.github.io/ILNP"
                    target="_blank"
                  >
                    <CardImg
                      top
                      src={require("../img/ilnp_cardsize.png")}
                      alt="Card image cap"
                      height="180px"
                      width="318px"
                      className="cardimg"
                    />
                  </a>
                  <CardBody>
                    <CardTitle>
                      <h6>ilnp</h6>
                    </CardTitle>
                    <CardText className="mt-3">
                      <p>
                        Rebuilding a pre-existing web store in React for
                        increased efficiency.
                      </p>
                      <p>
                        <strong>Features:</strong> React, Redux
                      </p>
                    </CardText>
                    <hr />
                    <Button
                      className="aboutbtn"
                      href="https://allisonrharrison.github.io/ILNP"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fas fa-external-link-alt fa-sm"></i> Visit
                      Site
                    </Button>
                    <Button
                      className="aboutbtn"
                      href="https://github.com/allisonrharrison/ILNP"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </Button>
                  </CardBody>
                </Card>
                {/* SUN RAE DEVELOPMENT */}
                <Card className="text-center proj col-sm-12 p-0">
                  <a href="https://sunrae.dev">
                    <CardImg
                      top
                      src={require("../img/sunraedev-cardsize.png")}
                      alt="Card image cap"
                      height="180px"
                      width="318px"
                      className="cardimg"
                    />
                  </a>
                  <CardBody>
                    <CardTitle>
                      <h6>sun rae development</h6>
                    </CardTitle>
                    <CardText className="mt-3">
                      <p>
                        This website! My personal web development portfolio.
                      </p>
                      <p>
                        <strong>Features:</strong> Bootstrap 4, React
                      </p>
                    </CardText>
                    <hr />
                    <Button className="aboutbtn" size="sm">
                      <i className="fas fa-external-link-alt fa-sm"></i> Visit
                      Site
                    </Button>
                    <Button
                      className="aboutbtn"
                      href="https://github.com/allisonrharrison/sunraedevelopment"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </Button>
                  </CardBody>
                </Card>
              </CardDeck>
              <CardDeck>
                <Card className="card text-center proj col-sm-12 p-0">
                  <a
                    href="https://codepen.io/allisonrharrison/pen/ExYXJoe"
                    target="_blank"
                  >
                    <CardImg
                      top
                      src={require("../img/leapyear_screenshot.png")}
                      alt="Card image cap"
                      height="180px"
                      width="318px"
                    />
                  </a>
                  <CardBody>
                    <CardTitle>
                      <h6>leap year calculator</h6>
                    </CardTitle>
                    <CardText className="mt-2">
                      <p className="card-text">
                        A basic app which will take in any year & calculate if
                        it is a Leap Year.
                      </p>
                      <p className="card-text">
                        <strong>Features:</strong> HTML, CSS, JavaScript
                      </p>
                    </CardText>
                    <hr />
                    <Button
                      className="aboutbtn"
                      href="https://codepen.io/allisonrharrison/pen/ExYXJoe"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fab fa-codepen"></i> Demo on CodePen
                    </Button>
                  </CardBody>
                </Card>
                <Card className="text-center proj col-sm-12 p-0">
                  <a
                    href="https://codepen.io/allisonrharrison/pen/PoYjgRZ"
                    target="_blank"
                  >
                    <CardImg
                      top
                      src={require("../img/eightball_cardsize.png")}
                      alt="Card image cap"
                      height="180px"
                      width="318px"
                    />
                  </a>
                  <CardBody>
                    <CardTitle>
                      <h6>magic eight ball</h6>
                    </CardTitle>
                    <CardText className="mt-2">
                      <p>
                        Input a question & the app will randomly generate your
                        fortune.
                      </p>
                      <p>
                        <strong>Features:</strong> HTML, CSS, JavaScript
                      </p>
                    </CardText>
                    <hr />
                    <Button
                      className="aboutbtn"
                      href="https://codepen.io/allisonrharrison/pen/PoYjgRZ"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fab fa-codepen"></i> Demo on CodePen
                    </Button>
                  </CardBody>
                </Card>
                <Card className="text-center proj col-sm-12 p-0">
                  <a
                    href="https://codepen.io/allisonrharrison/pen/WNbVOYL"
                    target="_blank"
                  >
                    <CardImg
                      top
                      src={require("../img/rockpaperscissors_cardsize.png")}
                      alt="Card image cap"
                      height="180px"
                      width="318px"
                    />
                  </a>
                  <CardBody>
                    <CardTitle>
                      <h6>rock paper scissors</h6>
                    </CardTitle>
                    <CardText className="mt-2">
                      <p>
                        Select Rock, Paper, or Scissors on the left-hand side
                        and try to beat the Computer.
                      </p>
                    </CardText>
                    <p>
                      <strong>Features:</strong> HTML, CSS, JavaScript
                    </p>
                    <hr />
                    <Button
                      className="aboutbtn"
                      href="https://codepen.io/allisonrharrison/pen/WNbVOYL"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fab fa-codepen"></i> Demo on CodePen
                    </Button>
                  </CardBody>
                </Card>
              </CardDeck>
            </CardBody>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Personal;
