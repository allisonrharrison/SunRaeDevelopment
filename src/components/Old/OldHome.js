import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Fade } from 'react-reveal'
import './OldHome.scss'
import LetterSlide from '../utils/LetterSlide'
import { NavLink } from "react-router-dom";
import Contact from '../Contact'
import Socials from '../utils/Socials'
import { HomeLink } from '../Home'
import resume from '../../files/Allison Harrison Resume.docx'

class OldHome extends Component {
  constructor(props) {
    super(props)
    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.state = {
      isHovering: false
    }
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    }
  }

  render() {
    return (
      <div>
        <div className="mb-5" id="old-home">
          <Fade>
            <div className="mobile-full">
            <img src={require('../../img/headshot200.jpg').default} />
            <div id="default"><h1>Hi, I'm <span className="pink">Allis</span><span className="orange"><LetterSlide /></span><span className="pink">n</span> <span className="pink">Rae</span>!</h1></div>

            <div id="mobile"><h1>Hi, I'm <span className="pink">Allis</span><span className="orange"><LetterSlide /></span><span className="pink">n</span> <span className="pink">Rae</span>!</h1></div>
            </div>
            <div className="mobile-full">
            <p className="current-positions">I'm pretty busy lately working <span className="time">full time</span> as a <span className="title">Web Developer</span> at <a className="company" href="https://vsg360.com" target="_blank" rel="noreferrer">VSG Marketing</a> <wbr /> and <span className="time">part time</span> as an <span className="title">API Engineer</span> at <a href="https://www.linkedin.com/company/bidchuck/about/" target="_blank" rel="noreferrer" className="company">bidChuck</a>.</p>
            <p>I don't get a whole lot of time to work on this site, <br />but I appreciate you stopping by. 💜</p>
            <br />
            <div className="home-links">
              <Fade>
              <HomeLink
                href="/portfolio"
                color="#c763b0"
                text="Portfolio"
              /></Fade>
              <Fade>
              <HomeLink
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                download
                color="#8270db"
                text="Resume"
              />
              </Fade>
              <Fade>
              <HomeLink href="/contact" color="#1cacc3" text="Contact" />
              </Fade>
            </div>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}

export default OldHome
