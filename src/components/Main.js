import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navigation from './Navigation'
import Portfolio from './Portfolio'
import OldHome from './Old/OldHome'

class Main extends Component {
  render () {
    return (
      <div id="main">
        <Router>
            <Switch>
          <Route exact path="/">
            <OldHome />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default Main
