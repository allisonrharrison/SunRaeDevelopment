import React, { Component } from "react";
import Home from "./HomeComponent";
import Projects from "./ProjectsComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Navigation from "./NavComponent";

class Main extends Component {

  render() {
    return(
      <div className="container">
      <Home />
      <About />
      <Projects />
      <Contact />
      </div>
    )
  }
}

export default Main;