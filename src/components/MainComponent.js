import React, { Component } from "react";
import Home from "./HomeComponent";
import Projects from "./ProjectsComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Navigation from "./NavComponent";

class Main extends React.Component {

  render() {
    return(
      <div className="col-12">
      <Navigation />
      <Home />
      <Projects />
      <About />
      <Contact />
      </div>
    )
  }
}

export default Main;