import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Navigation extends Component {
  constructor() {
    super();
    this.portalOnClick = this.portalOnClick.bind(this);
  }

  portalOnClick() {
    window.open(`https://staging.neurobridges.org/`, "NeuroBridges_Portal");
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="/">NeuroBridges</Navbar.Brand>
          <Nav>
            <Link className="nav-link" to="/">
              Welcome
            </Link>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
            <Link className="nav-link" to="/news">
              News
            </Link>
            <Link className="nav-link" to="/internal">
              Internal
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
          <Nav className="ml-auto">
            <Button onClick={this.portalOnClick} variant="secondary">
              NeuroBridges Portal
            </Button>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
