import React, { Component } from "react";
import CardData from "/Users/ishanpatel/Downloads/learning-react/neuro-bridges/src/components/About/CardData.js";
import CardItem from "./CardItem";
import { Row, Col, Container } from "react-bootstrap";

class About extends Component {
  constructor() {
    super();
    this.state = {
      bios: CardData,
    };
    this.cardGroup = this.cardGroup.bind(this);
  }

  cardGroup() {
    return;
  }

  render() {
    const cardGroup = CardData.map((item) => (
      <Col>
        <CardItem item={item} key={item.id} />
      </Col>
    ));
    console.log(cardGroup);
    return (
      <div style={{ background: "radial-gradient(rgb(202, 210, 218),white)" }}>
        <Container>
          <Col>
            <Row>
              <div className="title">
                <h1>Our Team</h1>
              </div>
            </Row>
            <Row>{cardGroup}</Row>
          </Col>
        </Container>
      </div>
    );
  }
}

export default About;
