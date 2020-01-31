import React, { Component } from "react";
import {
  CardBody,
  CardHeader,
  CardImg,
  Card,
  CardDeck,
  CardText
} from "reactstrap";
import { Fade } from "react-reveal";

class Personal extends React.Component {
  render() {
    return (
      <div className="panel">
        <Fade>
          <h5 className="mb-5">PERSONAL PROJECTS</h5>
          <Card style={{ border: "none" }}>
            <CardBody>
              <CardDeck>
                {/* MIND'S EYE TATTOO STUDIO */}
                <Card className="text-center col-sm-12 proj">
                  <a
                    href="https://allisonrharrison.github.io/MindsEyeTattooStudio/index.html"
                    target="_blank"
                  >
                    <CardImg
                      top
                      src={require("../img/METS_screenshot.png")}
                      alt="Card image cap"
                    />
                  </a>
                  <CardBody>
                    <CardHeader>
                      <h5>mind's eye tattoo</h5>
                    </CardHeader>
                    <CardText className="mt-2">
                      <p>
                        My first project: A website for a local tattoo business.
                      </p>
                      <p>
                        <strong>Features:</strong> Bootstrap 4
                      </p>
                    </CardText>
                    <a
                      href="https://allisonrharrison.github.io/MindsEyeTattooStudio/index.html"
                      target="_blank"
                      className="btn btn-sm text-white"
                    >
                      <i className="fas fa-external-link-alt fa-sm"></i> Visit
                      Site
                    </a>
                    &nbsp;
                    <a
                      href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                      target="_blank"
                      className="btn btn-sm text-white"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </a>
                  </CardBody>
                </Card>
                {/* ILNP */}
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
                    <CardHeader>
                      <h5>ilnp</h5>
                    </CardHeader>
                    <CardText className="mt-2">
                      <p>
                        Rebuilding a web store in React for increased
                        efficiency.
                      </p>
                      <p>
                        <strong>Features:</strong> React, Redux
                      </p>
                    </CardText>
                    <a
                      href="/"
                      target="_blank"
                      className="btn btn-sm text-white"
                    >
                      <i className="fas fa-external-link-alt fa-sm"></i> Visit
                      Site
                    </a>
                    &nbsp;
                    <a
                      href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                      target="_blank"
                      className="btn btn-sm text-white"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </a>
                  </CardBody>
                </Card>
                {/* SUN RAE DEVELOPMENT */}
                <Card className="text-center proj col-sm-12">
                  <a href="https://sunrae.dev">
                    <CardImg
                      top
                      src={require("../img/sunrae_homepage_screenshot.png")}
                      alt="Card image cap"
                    />
                  </a>
                  <CardBody>
                    <CardHeader>
                      <h5>sun rae development</h5>
                    </CardHeader>
                    <CardText className="mt-2">
                      <p>
                        This website! My personal web development portfolio.
                      </p>
                      <p>
                        <strong>Features:</strong> Bootstrap 4
                      </p>
                    </CardText>
                    <a
                      href="/"
                      target="_blank"
                      className="btn btn-sm text-white"
                    >
                      <i className="fas fa-external-link-alt fa-sm"></i> Visit
                      Site
                    </a>
                    &nbsp;
                    <a
                      href="https://github.com/allisonrharrison/sunraedevelopment"
                      target="_blank"
                      className="btn btn-sm text-white"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </a>
                  </CardBody>
                </Card>
              </CardDeck>
            </CardBody>
          </Card>
        </Fade>
        <hr />
      </div>
    );
  }
}

export default Personal;
