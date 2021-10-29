import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import img1 from "../Assets/800x400imgtest.jpg";
import img2 from "../Assets/800x400imgtest2.jpg";
import { Link } from "react-router-dom";

class WelcomeSlides extends Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/about">
              <Button>About the Team</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Welcome!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/about">
              <Button>About the Team</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Third slide" />

          <Carousel.Caption>
            <h3>Welcome!</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Link to="/about">
              <Button>About the Team</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default WelcomeSlides;
