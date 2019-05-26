import React, { Component } from "react";

export class ChatBox extends Component {
  render() {
    return (
      <div className="chat-box">
        <div>
          <strong>User:</strong> hey man look at this pizza!
        </div>
        <div className="center-chat-input">
          <div className="chat-input">
            <textarea type="text" placeHolder="Type here...." />
            <button>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBox;
