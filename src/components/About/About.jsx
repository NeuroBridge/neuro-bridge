import React, { Component } from "react";
import { Container, CardDeck } from "react-bootstrap";
import CardData from "/Users/ishanpatel/Downloads/learning-react/neuro-bridges/src/components/About/CardData.js";
import CardItem from "./CardItem";

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
      <div style={{ background: "radial-gradient(white, grey)" }}>
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
        <br />
      </div>
    );
  }
}

export default About;
