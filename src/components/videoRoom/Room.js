import React, { Component } from "react";
import "./room.css";
import ChatBox from "./chatBox/ChatBox";

export class Room extends Component {
  render() {
    return (
      <div className="video-room">
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" title="hello" />
        <ChatBox />
      </div>
    );
  }
}

export default Room;
