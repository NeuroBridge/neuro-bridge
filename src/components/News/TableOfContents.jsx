import React, { Component } from "react";
import NewsData from "./NewsText.jsx";
import { Link } from "react-scroll";

class TableOfContents extends Component {
  constructor() {
    super();
    this.state = {
      headers: NewsData,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    const headerGroup = this.state.headers.map((item) => (
      <div key={item.id}>
        <li>
          <Link
            onClick={this.handleClick}
            activeClass="active"
            to={"header" + item.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p>{item.title}</p>
          </Link>
        </li>
      </div>
    ));
    return (
      <>
        <h4 onClick={this.handleClick} style={{ textAlign: "center" }}>
          Contents
        </h4>
        <ul>{headerGroup}</ul>
      </>
    );
  }
}

export default TableOfContents;
