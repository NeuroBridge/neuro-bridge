import React, { Component } from "react";
import { Container } from "react-bootstrap";
import WelcomeSlides from "./Carousel.jsx";
import ProjectSummary from "./ProjectSummary.jsx";
import IntelectualMerrit from "./IntelectualMerrit.jsx";
import BroaderImpact from "./BroaderImpact.jsx";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <>
        <div className="carousel">
          <WelcomeSlides />
        </div>
        <Container>
          <ProjectSummary />
          <hr />
          <IntelectualMerrit />
          <hr />
          <BroaderImpact />
          <hr />
        </Container>
      </>
    );
  }
}
export default Welcome;
