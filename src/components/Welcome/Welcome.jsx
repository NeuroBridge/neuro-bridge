import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WelcomeSlides from "./Carousel.jsx";
import ProjectSummary from "./ProjectSummary.jsx";
import IntelectualMerrit from "./IntelectualMerrit.jsx";
import BroaderImpact from "./BroaderImpact.jsx";

class Welcome extends Component {
  render() {
    return (
      <>
        <WelcomeSlides />
        <br />
        <br />
        <br />
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
