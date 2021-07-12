import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class News extends Component {
  render() {
    return (
      <Row>
        <div style={{ background: "grey" }}>
          <Col fluid>
            <p>
              This is going to be the side bar to easily navigate the news page
              hopefuly{" "}
            </p>
          </Col>
        </div>
        <Col>
          <h4>This is where the news is going to go</h4>
        </Col>
      </Row>
    );
  }
}

export default News;
