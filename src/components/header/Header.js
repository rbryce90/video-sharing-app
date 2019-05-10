import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  linkStyle = () => {
    return {
      "text-decoration": "inherit",
      color: "inherit"
    };
  };
  render() {
    return (
      <header>
        <h1>
          <Link to="/" style={this.linkStyle()}>
            Logo
          </Link>
        </h1>
        <div />
        <ul>
          <li>
            <Link to="/createroom" style={this.linkStyle()}>
              Create Room
            </Link>
          </li>
          <li>
            <Link to="/profile" style={this.linkStyle()}>
              Profile
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
