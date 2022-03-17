import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.scss";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      homeHover: false,
      userHover: false,
      folderHover: false,
      envelopeHover: false,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleHomeHover = this.toggleHomeHover.bind(this);
    this.toggleUserHover = this.toggleUserHover.bind(this);
    this.toggleFolderHover = this.toggleFolderHover.bind(this);
    this.toggleEnvelopeHover = this.toggleEnvelopeHover.bind(this);
    this.checkPath = this.checkPath.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  toggleHomeHover() {
    this.setState({
      homeHover: !this.state.homeHover,
    });
  }

  toggleFolderHover() {
    this.setState({
      folderHover: !this.state.folderHover,
    });
  }

  toggleEnvelopeHover() {
    this.setState({
      envelopeHover: !this.state.envelopeHover,
    });
  }

  toggleUserHover() {
    this.setState({
      userHover: !this.state.userHover,
    });
  }

  checkPath(route) {
    const { pathname } = this.props.location;
    if (route === pathname) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <ProSidebar collapsed={this.state.collapsed}>
        <Menu iconShape="circle">
          <SidebarHeader>
            <MenuItem
              icon={
                this.state.collapsed ? (
                  <i className="fas fa-bars burger"></i>
                ) : (
                  <i className="fas fa-times header burger"></i>
                )
              }
              onClick={this.toggleNavbar}
            >
              <span className="sunrae">SUNRAE</span>
              <span className="dev">.DEV</span>
            </MenuItem>
          </SidebarHeader>
          <SidebarContent>
            {this.state.homeHover || this.checkPath("/") ? (
              <MenuItem
                className="home-active"
                icon={<i className="fas fa-home"></i>}
                onMouseEnter={this.toggleHomeHover}
                onMouseLeave={this.toggleHomeHover}
              >
                home
                <Link to="/" />
              </MenuItem>
            ) : (
              <MenuItem
                icon={<i className="fas fa-home inactive"></i>}
                onMouseEnter={this.toggleHomeHover}
                onMouseLeave={this.toggleHomeHover}
              >
                home
                <Link to="/" />
              </MenuItem>
            )}
            {this.state.userHover || this.checkPath("/about-me") ? (
              <MenuItem
                className="about-active"
                icon={<i className="fas fa-user"></i>}
                onMouseEnter={this.toggleUserHover}
                onMouseLeave={this.toggleUserHover}
              >
                about me
                <Link to="/about-me" />
              </MenuItem>
            ) : (
              <MenuItem
                icon={<i className="fas fa-user inactive"></i>}
                onMouseEnter={this.toggleUserHover}
                onMouseLeave={this.toggleUserHover}
              >
                about me
                <Link to="/about-me" />
              </MenuItem>
            )}
            {this.state.folderHover || this.checkPath("/my-work") ? (
              <MenuItem
                className="work-active"
                icon={<i className="fas fa-code work-active"></i>}
                onMouseEnter={this.toggleFolderHover}
                onMouseLeave={this.toggleFolderHover}
              >
                my work
                <Link to="/my-work" />
              </MenuItem>
            ) : (
              <MenuItem
                icon={<i className="fas fa-code inactive"></i>}
                onMouseEnter={this.toggleFolderHover}
                onMouseLeave={this.toggleFolderHover}
              >
                my work
                <Link to="/my-work" />
              </MenuItem>
            )}
            {this.state.envelopeHover || this.checkPath("/contact") ? (
              <MenuItem
                className="contact-active"
                icon={<i className="fas fa-envelope-open contact-active"></i>}
                onMouseEnter={this.toggleEnvelopeHover}
                onMouseLeave={this.toggleEnvelopeHover}
              >
                contact
                <Link to="/contact" />
              </MenuItem>
            ) : (
              <MenuItem
                icon={<i className="fas fa-envelope inactive"></i>}
                onMouseEnter={this.toggleEnvelopeHover}
                onMouseLeave={this.toggleEnvelopeHover}
              >
                contact
                <Link to="/contact" />
              </MenuItem>
            )}
          </SidebarContent>
          <SidebarFooter>
            <MenuItem icon={<i className="fab fa-codepen"></i>}>
              codepen
              <Link
                to={{ pathname: "https://codepen.io/allisonrharrison" }}
                target="_blank"
                rel="noreferrer"
              />
            </MenuItem>
            <MenuItem icon={<i className="fab fa-github"></i>}>
              github
              <Link
                to={{ pathname: "https://github.com/allisonrharrison" }}
                target="_blank"
                rel="noreferrer"
              />
            </MenuItem>
            <MenuItem icon={<i className="fab fa-linkedin"></i>}>
              linkedin
              <Link
                to={{
                  pathname: "https://www.linkedin.com/in/allisonrharrison/",
                }}
                target="_blank"
                rel="noreferrer"
              />
            </MenuItem>
            <MenuItem icon={<i className="fab fa-twitter-square"></i>}>
              twitter
              <Link
                to={{
                  pathname: "https://www.twitter.com/SunRaeDev",
                }}
                target="_blank"
                rel="noreferrer"
              />
            </MenuItem>
          </SidebarFooter>
        </Menu>
      </ProSidebar>
    );
  }
}

Navigation.propTypes = {
  location: PropTypes.string,
};

export default withRouter(Navigation);
