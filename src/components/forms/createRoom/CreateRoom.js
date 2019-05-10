import React, { Component } from "react";
import "./create-room.css";

class CreateRoom extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <form className="create-room-form">
        <h1>Create Room</h1>
        <label htmlFor="YO">YO</label>
        <input type="text" />
        <label htmlFor="YO">YO</label>
        <input type="text" />
        <label htmlFor="YO">YO</label>
        <input type="text" />
        <label htmlFor="YO">YO</label>
        <input type="text" />
        <input type="submit" />
      </form>
    );
  }
}

export default CreateRoom;
