import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Home from "./HomeComponent";
import Portfolio from "./PortfolioComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import { Navigation } from "./NavComponent";

class Main extends Component {

  render() {
    return(
      <div id="content-body">
      <Navigation />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      </div>
    )
  }
}

export default Main;