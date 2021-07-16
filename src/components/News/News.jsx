import React, { Component } from "react";
import TableOfContents from "./TableOfContents";
import MainContent from "./MainContent";
import "/Users/ishanpatel/Downloads/learning-react/neuro-bridges/src/components/News/TableOfContents.css";

class News extends Component {
  render() {
    return (
      <div className="app">
        <h1>News</h1>
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
