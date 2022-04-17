import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navigation from './Navigation'
import Portfolio from './Portfolio'
import OldHome from './Old/OldHome'
import { HashRouter } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div id="main">
        <HashRouter>
            <Route exact path="/" component={OldHome} />
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
      </HashRouter>
      </div >
    )
  }
}

export default Main
