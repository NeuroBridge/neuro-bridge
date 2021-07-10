import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import testImage from "/Users/ishanpatel/Downloads/learning-react/neuro-bridges/src/components/Assets/testImage.jpg";

class CardItem extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={testImage} /*{this.props.item.imgPath}*/ />
        <Card.Body>
          <Card.Title>{this.props.item.name}</Card.Title>
          <Card.Text>{this.props.item.text}</Card.Text>
          <Link to={this.props.item.buttonLink}>
            <Button>{this.props.item.buttonText}</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default CardItem;
