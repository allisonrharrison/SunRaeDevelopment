import React, { Component } from "react";
import Home from "./HomeComponent";
import Projects from "./ProjectsComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Navigation from "./NavComponent";

class Main extends React.Component {

  render() {
    return(
      <div className="container">
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
      </div>
    )
  }
}

export default Main;