import React, { Component } from "react";
import CardData from "./CardData.js";
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
      <Row key={item.id}>
        <CardItem item={item} key={item.id} />
      </Row>
    ));
    return (
      <div style={{ background: "radial-gradient(rgb(202, 210, 218),white)" }}>
        <div>
          <Container>
            <Col>
              <Row>
                <div className="title">
                  <h1>Our Team</h1>
                </div>
              </Row>
              {cardGroup}
            </Col>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
