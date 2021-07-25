import React, { Component } from "react";
import NewsData from "./NewsText";

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      text: NewsData,
    };
  }

  render() {
    const newsGroup = this.state.text.map((item) => (
      <div key={item.id} className="content">
        <h4 id={"header" + String(item.id)}>{item.title}</h4>
        <p>{item.text}</p>
      </div>
    ));

    return <div>{newsGroup}</div>;
  }
}

export default MainContent;
