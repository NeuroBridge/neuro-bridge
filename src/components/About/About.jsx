import React, { Component } from "react";
import { Card, Button, Row, Col, Container, CardDeck } from "react-bootstrap";
import CardData from "/Users/ishanpatel/Downloads/learning-react/neuro-bridges/src/components/About/CardData.js";
import CardItem from "./CardItem";
import "/Users/ishanpatel/Downloads/learning-react/neuro-bridges/src/components/About/About-style.css";
class About extends Component {
  constructor() {
    super();
    this.state = {
      bios: CardData,
    };
  }

  render() {
    const cardGroup = this.state.bios.map((item) => (
      <CardItem item={item} key={item.id} />
    ));
    return (
      <div style={{ backgroundColor: "e5e5e5" }}>
        <Container>
          <br />
          <CardDeck>
            {cardGroup[0]}
            {cardGroup[1]}
            {cardGroup[2]}
          </CardDeck>
          <br />
          <CardDeck>
            {cardGroup[3]}
            {cardGroup[4]}
            {cardGroup[5]}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default About;
