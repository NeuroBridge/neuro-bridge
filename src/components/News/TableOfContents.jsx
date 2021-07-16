import React, { Component } from "react";
import MainContent from "./MainContent";
import NewsData from "/Users/ishanpatel/Downloads/learning-react/neuro-bridges/src/components/News/NewsText.jsx";

class TableOfContents extends Component {
  render() {
    <MainContent />;
    return (
      <nav aria-label="Table of contents">
        <h4>Table of Contents</h4>
        <a href="#header1">{NewsData[0].title}</a>
        <br />
        <a href="#header2">{NewsData[1].title}</a>
        <br />
        <a href="#header3">{NewsData[2].title}</a>
      </nav>
    );
  }
}

export default TableOfContents;
