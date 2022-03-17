import React, { Component } from 'react'
import Web from './WebComponent'
import School from './SchoolComponent'
import Games from './GamesComponent'
import { Flip } from 'react-reveal'

class Portfolio extends React.Component {
  render () {
    return (
    <div id="portfolio">
      <Web />
      <Games />
      <School />
      </div>
    )
  }
};

export default Portfolio
