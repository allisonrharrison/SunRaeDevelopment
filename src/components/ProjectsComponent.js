import React, { Component } from "react";
import Personal from "./PersonalComponent";
import Fun from "./FunComponent";
import School from "./SchoolComponent";
import { Flip } from "react-reveal";

class Projects extends React.Component {
  render() {

  return (
    <div id="projects">
      <Personal />
      <School />
      <Fun />
      </div>
  )}
};

export default Projects;