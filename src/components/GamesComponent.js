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

class Games extends React.Component {
  render() {
    return (
      <div id="games-apps" className="mb-5">
        <Fade>
          <h3 className="mb-5">GAMES & APPS</h3>
        <CardBody>
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
        </Fade>
      </div>
    )}
}

export default Games;