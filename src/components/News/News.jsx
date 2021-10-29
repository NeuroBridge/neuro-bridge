import React, { Component } from "react";
import TableOfContents from "./TableOfContents";
import MainContent from "./MainContent";
import "./News.css";

class News extends Component {
  constructor() {
    super();
    this.state = {
      currentHeader: "1",
    };
  }

  render() {
    return (
      <div className="app">
        <div className="title">
          <h1>News</h1>
        </div>
        <div className="nav" style={{ position: "fixed" }}>
          <TableOfContents />
        </div>
        <div className="content">
          <MainContent />
        </div>
      </div>
    );
  }
}

export default News;
