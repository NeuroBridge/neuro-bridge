import React, { Component } from "react";
import { Media, Row, Col } from "react-bootstrap";
import placeHolder from "/Users/ishanpatel/Downloads/learning-react/neuro-bridges/src/components/Assets/testImage.jpg";

class BroaderImpact extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <h3>Broader Impact</h3>
            <p>
              NeuroBridge impacts Information Science and Engineering by
              enabling and improving discovery of relevant scientific data
              across large, distributed and diverse collections. NeuroBridge
              will also provide an easy means of publishing metadata and
              incentivize data producers to do so by enabling collaboration and
              citation. The concepts developed in the project – semantically
              linking data through socio-metric network analysis from a wide
              variety of domain datasets - will have an impact on data
              collections outside the biomedical field, such as geoscience,
              political science, and have the potential to effectively improve
              access and discovery of scientific data. We will engage the
              broader community through workshops collocated with national and
              international conferences such as the Organization for the Human
              Brain Mapping and the International Neuroinformatics Coordinating
              Facility (INCF) Congress.
            </p>
          </Col>
          <Col sm={3}>
            <img src={placeHolder} width={200} height={200}></img>
          </Col>
        </Row>
      </>
    );
  }
}

export default BroaderImpact;
