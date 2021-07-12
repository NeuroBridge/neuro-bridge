import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar /*fixed="top"*/ bg="dark" variant="dark">
          <Navbar.Brand href="/">NeuroBridges</Navbar.Brand>
          <Nav>
            <Link className="nav-link" to="/">
              Welcome
            </Link>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
            <Link className="nav-link" to="/internal">
              Internal
            </Link>
            <Link className="nav-link" to="/news">
              News
            </Link>
            <Link className="nav-link" to="/publications">
              Publications
            </Link>
            <Link className="nav-link" to="/resources">
              Resources
            </Link>
            <Link className="nav-link" to="/software">
              Software
            </Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
