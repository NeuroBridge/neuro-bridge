import React, { Component } from "react";
import { Card, Breadcrumb } from "react-bootstrap";
import "./About.css";

class CardItem extends Component {
  render() {
    return (
      <Card key={this.props.item.id}>
        <div className="card">
          <Card.Img
            src={process.env.PUBLIC_URL + this.props.item.imgPath}
            alt={this.props.item.name}
          />
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            <Card.Text>{this.props.item.text}</Card.Text>
            <Breadcrumb>
              <Breadcrumb.Item active>{this.props.item.email}</Breadcrumb.Item>
              {this.props.item.phone === "" ? null : (
                <Breadcrumb.Item active>
                  {this.props.item.phone}
                </Breadcrumb.Item>
              )}
              {this.props.item.websitePath === "" ? null : (
                <Breadcrumb.Item href={this.props.item.websitePath}>
                  {this.props.item.linkText}
                </Breadcrumb.Item>
              )}
              {this.props.item.websitePath1 === "" ? null : (
                <Breadcrumb.Item href={this.props.item.websitePath1}>
                  {this.props.item.linkText1}
                </Breadcrumb.Item>
              )}
            </Breadcrumb>
          </Card.Body>
        </div>
      </Card>
    );
  }
}

export default CardItem;
