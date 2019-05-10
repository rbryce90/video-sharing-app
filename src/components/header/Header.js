import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreateRoom from '../forms/createRoom/CreateRoom';
import "./header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      roomFormToggle: false
    };
  }

  linkStyle = () => {
    return {
      "text-decoration": "inherit",
      color: "inherit"
    };
  };
  render() {
    let {roomFormToggle} = this.state;
    return (
      <header>
        <h1>
          <Link to="/" style={this.linkStyle()}>
            Logo
          </Link>
        </h1>
        <div />
        <ul>
          <li onClick={() => this.setState({
              roomFormToggle: roomFormToggle === false ? true : false 
          })}>
              Create Room
          </li>
          <li>
            <Link to="/profile" style={this.linkStyle()}>
              Profile
            </Link>
          </li>
        </ul>
        {roomFormToggle === false ? null: <CreateRoom />}
      </header>
    );
  }
}

export default Header;
